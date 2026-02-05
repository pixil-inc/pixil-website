#!/bin/bash

echo "🔍 Checking if build should be skipped..."
echo "Branch: $VERCEL_GIT_COMMIT_REF"
echo "Commit message: $VERCEL_GIT_COMMIT_MESSAGE"

# Skip builds ONLY for semantic-release branches (not main)
if [[ "$VERCEL_GIT_COMMIT_REF" =~ ^semantic-release ]]; then
  echo "⏭️  Skipping build: Semantic-release branch detected"
  exit 0
fi

# Always build main/master branches
if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]] || [[ "$VERCEL_GIT_COMMIT_REF" == "master" ]]; then
  echo "✅ Building main branch"
  exit 1
fi

echo "✅ Proceeding with build"
exit 1