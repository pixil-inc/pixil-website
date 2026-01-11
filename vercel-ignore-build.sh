#!/bin/bash

echo "🔍 Checking if build should be skipped..."

# Check if commit message contains "chore" (case insensitive)
if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ ^[Cc]hore.*version.*bump ]]; then
  echo "⏭️  Skipping build: Version bump commit detected"
  exit 0
fi

# Check for other chore patterns you want to skip
if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ ^[Cc]hore.* ]]; then
  echo "⏭️  Skipping build: Chore commit detected"
  exit 0
fi

# Check for specific patterns like semantic-release
if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ ^chore\(release\): ]]; then
  echo "⏭️  Skipping build: Release commit detected"
  exit 0
fi

echo "✅ Proceeding with build"
exit 1