import { Controller, Get, Res } from '@nestjs/common';
import * as Parser from 'rss-parser';

@Controller('rss-feed')
export class RssController {

  parser: Parser;

  constructor() {
    this.parser = new Parser();
  }

  @Get()
  async getRSS() {
    const feed = [];

    let feedItem = await this.parser.parseURL('https://www.inside-it.ch/frontend/insideit?_d=_rss&config=topnews');
    feedItem['name'] = 'Inside IT';
    feed.push(feedItem);
    feedItem = await this.parser.parseURL('https://rss.golem.de/rss.php?feed=RSS2.0');
    feedItem['name'] = 'Golem';
    feed.push(feedItem);
    feedItem = await this.parser.parseURL('https://www.pro-linux.de/rss/1/3/rss20_alles.xml');
    feedItem['name'] = 'Pro Linux';
    feed.push(feedItem);

    return feed;
  }
}
