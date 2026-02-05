## [1.2.14](https://github.com/pixil-inc/pixil-website/compare/v1.2.13...v1.2.14) (2026-02-05)

### Bug Fixes

- update eastpointe estimate ([3c3fa99](https://github.com/pixil-inc/pixil-website/commit/3c3fa99b32e1610756cb0e3d11755635cd587e97))

## [1.2.13](https://github.com/pixil-inc/pixil-website/compare/v1.2.12...v1.2.13) (2026-02-05)

### Bug Fixes

- skip chore commits to prevent duplicate deployments ([3b5f3d2](https://github.com/pixil-inc/pixil-website/commit/3b5f3d222c4b7418478ec12b15f65e964059db77))

## [1.2.12](https://github.com/pixil-inc/pixil-website/compare/v1.2.11...v1.2.12) (2026-02-05)

### Bug Fixes

- allow Vercel to deploy main branch regardless of commit message ([6b30d82](https://github.com/pixil-inc/pixil-website/commit/6b30d823e2a7b13ddc29ccc4182bd049ab1a80c8))
- enable GitHub deployment status updates from Vercel ([f299b96](https://github.com/pixil-inc/pixil-website/commit/f299b9699858ba2a4124368cd1ea9bd1544a432a))

## [1.2.11](https://github.com/pixil-inc/pixil-website/compare/v1.2.10...v1.2.11) (2026-02-05)

### Bug Fixes

- handle existing tags by deleting and recreating them ([3477d4b](https://github.com/pixil-inc/pixil-website/commit/3477d4b7514ab62f65b077076f49cfd6d35a06ac))

## [1.2.10](https://github.com/pixil-inc/pixil-website/compare/v1.2.9...v1.2.10) (2026-02-05)

### Bug Fixes

- add debug job to diagnose why tag-release workflow is skipped ([2daa1f6](https://github.com/pixil-inc/pixil-website/commit/2daa1f68159e55bdabc3ef607f22325a323955f8))
- create tag and release directly in release workflow to avoid [skip ci] issue ([9513a3e](https://github.com/pixil-inc/pixil-website/commit/9513a3e9541b98ea35a929a2e85ced7ad93a8682))
- improve branch deletion with better error handling and fallback ([05b8a90](https://github.com/pixil-inc/pixil-website/commit/05b8a9025396994e3abe9df47307a5ad8638e43d))

## [1.2.9](https://github.com/pixil-inc/pixil-website/compare/v1.2.8...v1.2.9) (2026-02-05)

### Bug Fixes

- use GitHub API to delete branches with proper authentication ([1f64843](https://github.com/pixil-inc/pixil-website/commit/1f64843a2dde8277bfc531e8c2e888f5ee4a4970))
- use notes file instead of inline notes to avoid shell escaping issues ([f556b65](https://github.com/pixil-inc/pixil-website/commit/f556b6598d1b5c4324ae9213f20f449dcf70fed5))

## [1.2.8](https://github.com/pixil-inc/pixil-website/compare/v1.2.7...v1.2.8) (2026-02-05)

### Bug Fixes

- add explicit repo context and improve gh CLI authentication for releases ([043c9d0](https://github.com/pixil-inc/pixil-website/commit/043c9d07a0c40cb73c175119b9923605866ffdf8))

## [1.2.7](https://github.com/pixil-inc/pixil-website/compare/v1.2.6...v1.2.7) (2026-02-05)

### Bug Fixes

- add better error handling and logging to release creation ([3cbfd8c](https://github.com/pixil-inc/pixil-website/commit/3cbfd8c580e409052de448b7c306c8d294a02549))
- ensure branch deletion runs even if release fails and include test branches ([150cf1e](https://github.com/pixil-inc/pixil-website/commit/150cf1e231443a9f7e0cd09056dcf49a59adbc81))

## [1.2.6](https://github.com/pixil-inc/pixil-website/compare/v1.2.5...v1.2.6) (2026-02-05)

### Bug Fixes

- handle existing tags in release workflow ([f677706](https://github.com/pixil-inc/pixil-website/commit/f677706b50c3f4044beda038f7e98e6de6cb7c9f))
- update commands to use yarn ([b0e4810](https://github.com/pixil-inc/pixil-website/commit/b0e4810ca72e9f8a01ba74de7dd6aee68b565fb1))

## [1.2.5](https://github.com/pixil-inc/pixil-website/compare/v1.2.4...v1.2.5) (2026-02-05)

### Bug Fixes

- update README with project branding ([95b6e60](https://github.com/pixil-inc/pixil-website/commit/95b6e604ac4ea11e2dc1c844cfa251eccf05d9f2))

## [1.2.4](https://github.com/pixil-inc/pixil-website/compare/v1.2.3...v1.2.4) (2026-02-05)

### Bug Fixes

- release failure ([0659886](https://github.com/pixil-inc/pixil-website/commit/06598862b0da1d07511f5a012ffeaab46f506e4d))

## [1.2.3](https://github.com/pixil-inc/pixil-website/compare/v1.2.2...v1.2.3) (2026-02-05)

### Bug Fixes

- added automatic semantic branch release ([f1aed34](https://github.com/pixil-inc/pixil-website/commit/f1aed3434f33ce34a023c032f91c761d400a5cb5))
- attempt to fix auto release ([07c744a](https://github.com/pixil-inc/pixil-website/commit/07c744af62982d8304a817a21018f8b706f83592))

## [1.2.2](https://github.com/pixil-inc/pixil-website/compare/v1.2.1...v1.2.2) (2026-02-05)

### Bug Fixes

- added estimates ([88372c9](https://github.com/pixil-inc/pixil-website/commit/88372c98940cf6030656cf132e90d178660cf613))
- remove persist ([1285f19](https://github.com/pixil-inc/pixil-website/commit/1285f19714d7cca3c579f800161ccee3258cb4aa))
- revert release.yml ([130cb2f](https://github.com/pixil-inc/pixil-website/commit/130cb2f593d1cc426ff2b6740ecb8d643a2ddd35))
- update release ([9d514b6](https://github.com/pixil-inc/pixil-website/commit/9d514b67d0438c798c980ebbce50b6f7b02a517b))

## [1.2.1](https://github.com/pixil-inc/pixil-website/compare/v1.2.0...v1.2.1) (2026-01-18)

### Bug Fixes

- optimizations ([6319541](https://github.com/pixil-inc/pixil-website/commit/6319541cf35fed006677fa08a313d78c5d04d937))

# [1.2.0](https://github.com/pixil-inc/pixil-website/compare/v1.1.0...v1.2.0) (2026-01-14)

### Bug Fixes

- 404 ([8ebd5e1](https://github.com/pixil-inc/pixil-website/commit/8ebd5e18a78084b8c4913dbdae02c93cfae78836))
- add sitemap ([af68cb0](https://github.com/pixil-inc/pixil-website/commit/af68cb05ce0ca6a8ef7bd8a25cfd42ad6c88a364))

### Features

- address github review ([0b95f3e](https://github.com/pixil-inc/pixil-website/commit/0b95f3e83d6680bc517c34c09c45acd836774ae9))

# [1.1.0](https://github.com/pixil-inc/pixil-website/compare/v1.0.13...v1.1.0) (2026-01-13)

### Features

- added anayltics ([8ef3c79](https://github.com/pixil-inc/pixil-website/commit/8ef3c796ebef752796ed3309f17466613a75c434))

## [1.0.13](https://github.com/pixil-inc/pixil-website/compare/v1.0.12...v1.0.13) (2026-01-13)

### Bug Fixes

- optimize css ([0f90bc8](https://github.com/pixil-inc/pixil-website/commit/0f90bc8e227c2563dc286814a2a95dc7247c06e5))

## [1.0.12](https://github.com/pixil-inc/pixil-website/compare/v1.0.11...v1.0.12) (2026-01-13)

### Bug Fixes

- removed google captcha css ([ef5fd5f](https://github.com/pixil-inc/pixil-website/commit/ef5fd5f784b926e7509b7d232fa0e4438c3bc962))

## [1.0.11](https://github.com/pixil-inc/pixil-website/compare/v1.0.10...v1.0.11) (2026-01-13)

### Bug Fixes

- astro optimization ([aee2ec3](https://github.com/pixil-inc/pixil-website/commit/aee2ec377ee4fd3463365eef885291cea2dc50d1))

## [1.0.10](https://github.com/pixil-inc/pixil-website/compare/v1.0.9...v1.0.10) (2026-01-12)

### Bug Fixes

- revert layout ([7777450](https://github.com/pixil-inc/pixil-website/commit/777745099b6839ba878a1ffb5a7ceee8471f4890))

## [1.0.9](https://github.com/pixil-inc/pixil-website/compare/v1.0.8...v1.0.9) (2026-01-12)

### Bug Fixes

- cwv optimizations ([79ae7e9](https://github.com/pixil-inc/pixil-website/commit/79ae7e92923df27d7a968c8c58c43b99f5e95adf))

## [1.0.8](https://github.com/pixil-inc/pixil-website/compare/v1.0.7...v1.0.8) (2026-01-12)

### Bug Fixes

- contact api endpoint ([6dc788b](https://github.com/pixil-inc/pixil-website/commit/6dc788b9d55da3d161e1d5e763dfa681bcf061a1))

## [1.0.7](https://github.com/pixil-inc/pixil-website/compare/v1.0.6...v1.0.7) (2026-01-12)

### Bug Fixes

- added recaptcha ([b1ba66c](https://github.com/pixil-inc/pixil-website/commit/b1ba66c743ceaf00fbfaee780598d26baa971fe2))
- site key ([884a791](https://github.com/pixil-inc/pixil-website/commit/884a791936db11d4355352c5b04f26b5be5066be))
- site key test ([23cda3e](https://github.com/pixil-inc/pixil-website/commit/23cda3ec03195d5b11df579364051cb56a65da63))
- updated keys ([40e5986](https://github.com/pixil-inc/pixil-website/commit/40e5986344abdcd832a063f2e1c13028353faa26))

## [1.0.6](https://github.com/pixil-inc/pixil-website/compare/v1.0.5...v1.0.6) (2026-01-11)

### Bug Fixes

- header padding ([94e049d](https://github.com/pixil-inc/pixil-website/commit/94e049ddeda55cfea3fb3a4092d0c4bcb66c3a35))

## [1.0.5](https://github.com/pixil-inc/pixil-website/compare/v1.0.4...v1.0.5) (2026-01-11)

### Bug Fixes

- tweak styles ([cc0bd37](https://github.com/pixil-inc/pixil-website/commit/cc0bd3777a6bfd659dd38cd72a4a88a7b38dbcc8))

## [1.0.4](https://github.com/pixil-inc/pixil-website/compare/v1.0.3...v1.0.4) (2026-01-11)

### Bug Fixes

- page contwent ([deca560](https://github.com/pixil-inc/pixil-website/commit/deca56095bc6d6b0a3a3a9d8e6ec759492c602e9))

## [1.0.3](https://github.com/pixil-inc/pixil-website/compare/v1.0.2...v1.0.3) (2026-01-10)

### Bug Fixes

- local fonts ([41e9bae](https://github.com/pixil-inc/pixil-website/commit/41e9bae3b0aa8cccc954d9d0cd85d3d5877df3dc))

## [1.0.2](https://github.com/pixil-inc/pixil-website/compare/v1.0.1...v1.0.2) (2026-01-10)

### Bug Fixes

- CWV attempt ([7fc18ae](https://github.com/pixil-inc/pixil-website/commit/7fc18ae429562154ddd1a69f1c07d8d615332f88))
- format ([9fae5aa](https://github.com/pixil-inc/pixil-website/commit/9fae5aaa683a38bd9f15a2c560285952e9efa948))

## [1.0.1](https://github.com/pixil-inc/pixil-website/compare/v1.0.0...v1.0.1) (2026-01-10)

### Bug Fixes

- layout revisions ([32bcc29](https://github.com/pixil-inc/pixil-website/commit/32bcc296fe24cd71f451212e16d33be712132e6d))

# 1.0.0 (2026-01-10)

### Bug Fixes

- format ([5276a35](https://github.com/pixil-inc/pixil-website/commit/5276a35076c638fc5c9d8393b96d8998e2936c4e))
- ignore and release ([868d772](https://github.com/pixil-inc/pixil-website/commit/868d772ab3af2e4d747c7b531f4c770e6637c4b8))
- init build errors ([165d509](https://github.com/pixil-inc/pixil-website/commit/165d5091fc4b1a628278a531fdcbd65d317d5824))
- prettier ([f0a69b6](https://github.com/pixil-inc/pixil-website/commit/f0a69b614117e97f35742fe0bc9fdcd5b02b3a04))
- rename package ([8a64fba](https://github.com/pixil-inc/pixil-website/commit/8a64fbafda84376f23e2e949f5130611efe0aef9))
- update packages ([bdabc45](https://github.com/pixil-inc/pixil-website/commit/bdabc458f79999fec49d02b4f807add2e5e148c9))
- version ([15de600](https://github.com/pixil-inc/pixil-website/commit/15de600a59929f9aacbcde370e21f51356f57a5c))
- yarn package ([2687c96](https://github.com/pixil-inc/pixil-website/commit/2687c96d1d88241b188f430d3ff2794a0a83c4b7))

# 0.0.3 (2026-01-10)

### Bug Fixes

- format ([5276a35](https://github.com/pixil-inc/pixil-website/commit/5276a35076c638fc5c9d8393b96d8998e2936c4e))
- init build errors ([165d509](https://github.com/pixil-inc/pixil-website/commit/165d5091fc4b1a628278a531fdcbd65d317d5824))
- prettier ([f0a69b6](https://github.com/pixil-inc/pixil-website/commit/f0a69b614117e97f35742fe0bc9fdcd5b02b3a04))
- rename package ([8a64fba](https://github.com/pixil-inc/pixil-website/commit/8a64fbafda84376f23e2e949f5130611efe0aef9))
- update packages ([bdabc45](https://github.com/pixil-inc/pixil-website/commit/bdabc458f79999fec49d02b4f807add2e5e148c9))
- yarn package ([2687c96](https://github.com/pixil-inc/pixil-website/commit/2687c96d1d88241b188f430d3ff2794a0a83c4b7))

# 0.0.1 (2026-01-10)

### Bug Fixes

- init build errors ([165d509](https://github.com/pixil-inc/pixil-website/commit/165d5091fc4b1a628278a531fdcbd65d317d5824))
- prettier ([f0a69b6](https://github.com/pixil-inc/pixil-website/commit/f0a69b614117e97f35742fe0bc9fdcd5b02b3a04))
- rename package ([8a64fba](https://github.com/pixil-inc/pixil-website/commit/8a64fbafda84376f23e2e949f5130611efe0aef9))
- update packages ([bdabc45](https://github.com/pixil-inc/pixil-website/commit/bdabc458f79999fec49d02b4f807add2e5e148c9))
- yarn package ([2687c96](https://github.com/pixil-inc/pixil-website/commit/2687c96d1d88241b188f430d3ff2794a0a83c4b7))
