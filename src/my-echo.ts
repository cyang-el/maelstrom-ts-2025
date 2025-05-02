#!/usr/bin/env node

import * as Node from "./node";

Node.on('echo', function(req: Node.Message) {
  Node.reply(req, {type: 'echo_ok', 'echo': req.body.echo});
});

Node.main();
