#!/usr/bin/env bash

set -e

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_SRC="$REPO_ROOT/.agents/skills"

if [ ! -d "$SKILL_SRC" ]; then
    echo "Error: Skill source not found at $SKILL_SRC"
    exit 1
fi

install_target() {
    local DEST="$1"
    local TYPE="$2"
    
    mkdir -p "$DEST"
    
    for SKILL in gof-review gof-refactor gof-generator gof-base; do
        local TARGET_PATH="$DEST/$SKILL"
        rm -rf "$TARGET_PATH"
        
        if [ "$TYPE" = "copy" ]; then
            cp -r "$SKILL_SRC/$SKILL" "$TARGET_PATH"
        else
            ln -s "$SKILL_SRC/$SKILL" "$TARGET_PATH"
        fi
    done
    echo "✔ Installed skills to $DEST via $TYPE"
}

echo "Installing GoF Patterns Master skill..."

# Global paths
AGENTS_GLOBAL="$HOME/.agents/skills"
CLAUDE_GLOBAL="$HOME/.claude/skills"
PI_GLOBAL="$HOME/.pi/skills"

# Local paths
AGENTS_LOCAL="./.agents/skills"
CLAUDE_LOCAL="./.claude/skills"
PI_LOCAL="./.pi/skills"

if [ "$1" = "--global" ] || [ "$1" = "-g" ]; then
    install_target "$AGENTS_GLOBAL" "copy"
    install_target "$CLAUDE_GLOBAL" "symlink"
    install_target "$PI_GLOBAL" "symlink"
else
    install_target "$AGENTS_LOCAL" "copy"
    install_target "$CLAUDE_LOCAL" "symlink"
    install_target "$PI_LOCAL" "symlink"
fi

echo "Done!"
