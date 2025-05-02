#!/usr/bin/env node

import * as Node from "./node";
import {v4 as uuidv4} from "uuid";

Node.on('generate', function(req: Node.Message) {
  Node.reply(req, {
      type: 'generate_ok',
      id: uuidv4()
  });
});

Node.main();
