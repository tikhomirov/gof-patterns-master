#!/usr/bin/env node

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const canonicalSource = path.join(repoRoot, '.agents', 'skills');

const args = process.argv.slice(2);
const command = args[0] ?? 'help';

const TARGETS = {
  agents: {
    label: '.agents',
    type: 'copy',
    localDestination: cwd => path.join(cwd, '.agents', 'skills'),
    globalDestination: home => path.join(home, '.agents', 'skills'),
  },
  claude: {
    label: 'Claude Code',
    type: 'symlink',
    localDestination: cwd => path.join(cwd, '.claude', 'skills'),
    globalDestination: home => path.join(home, '.claude', 'skills'),
  },
  pi: {
    label: 'Pi Agent',
    type: 'symlink',
    localDestination: cwd => path.join(cwd, '.pi', 'skills'),
    globalDestination: home => path.join(home, '.pi', 'skills'),
  }
};

const SKILL_ENTRIES = [
  'gof-review',
  'gof-refactor',
  'gof-generator',
  'gof-base'
];

try {
  if (command === 'install') {
    await install(args.includes('--global'), args.includes('--yes'));
  } else {
    console.log(`Usage: gof-patterns-install install [--global] [--yes]`);
  }
} catch (error) {
  console.error(`\nError: ${error.message}`);
  process.exitCode = 1;
}

async function install(isGlobal, isYes) {
  console.log(`\nInstalling GoF Patterns skills...`);
  const cwd = process.cwd();
  const home = os.homedir();
  
  if (!fs.existsSync(canonicalSource)) {
    throw new Error(`Source skills directory not found at ${canonicalSource}`);
  }

  for (const [key, target] of Object.entries(TARGETS)) {
    const destDir = isGlobal ? target.globalDestination(home) : target.localDestination(cwd);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    for (const entry of SKILL_ENTRIES) {
      const src = path.join(canonicalSource, entry);
      const dest = path.join(destDir, entry);
      
      if (!fs.existsSync(src)) continue;

      if (fs.existsSync(dest)) {
        fs.rmSync(dest, { recursive: true, force: true });
      }

      if (target.type === 'copy') {
        fs.cpSync(src, dest, { recursive: true });
      } else {
        fs.symlinkSync(src, dest, 'dir');
      }
      console.log(`✔ Installed ${entry} to ${destDir} (${target.label})`);
    }
  }
  
  console.log('\nInstall complete!');
}