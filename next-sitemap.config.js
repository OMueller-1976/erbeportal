/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.erbeportal.de',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
}
