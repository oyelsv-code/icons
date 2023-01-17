module.exports = {
  branches: ['master'],
  preset: 'angular',
  plugins: [
    // [
    //   '@semantic-release/commit-analyzer',
    //   {
    //     parserOpts: {
    //       noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    //     },
    //     releaseRules: [
    //       { scope: 'docs', release: false },
    //       { scope: 'no-release', release: false },
    //     ],
    //   }
    // ],
    // '@semantic-release/release-notes-generator',
    // '@semantic-release/changelog',
    // ['@semantic-release/npm', {
    //   npmPublish: false,
    // }],
    // ['@semantic-release/git', {
    //   assets: ['docs/CHANGELOG.md', 'package.json'],
    //   message: 'build(release): ${nextRelease.version}\n${nextRelease.notes}',
    // }],
    // '@semantic-release/github',
  ],
};
