/**
 * Type definitions for node messaging framework
 */

/**
 * Represents a message between nodes
 */
export interface Message {
  src: string;
  dest: string;
  body: MessageBody;
}

/**
 * Base message body structure
 */
export interface MessageBody {
  type: string;
  msg_id?: number;
  in_reply_to?: number;
  [key: string]: any; // For additional properties
}

/**
 * Init message body type
 */
export interface InitBody extends MessageBody {
  type: 'init';
  node_id: string;
  node_ids: string[];
}

/**
 * Error message body type
 */
export interface ErrorBody extends MessageBody {
  type: 'error';
  code: number;
  text: string;
}

/**
 * Message handler function type
 */
export type MessageHandler = (req: Message) => void | Promise<void>;

/**
 * Get the local node ID
 */
export function nodeId(): string;

/**
 * Get all node IDs in the cluster
 */
export function nodeIds(): string[];

/**
 * Generate a new message ID
 */
export function newMsgId(): number;

/**
 * Send a message to the specified destination node
 * @param dest Destination node ID
 * @param body Message body to send
 */
export function send(dest: string, body: MessageBody): void;

/**
 * Reply to a request with the given response body
 * @param req Original request message
 * @param body Response body to send
 */
export function reply(req: Message, body: MessageBody): void;

/**
 * Send an RPC request to a node, returning a promise that resolves with the response
 * @param dest Destination node ID
 * @param body Message body to send
 * @returns Promise that resolves with the response body
 */
export function rpc(dest: string, body: MessageBody): Promise<MessageBody>;

/**
 * Send an RPC request that retries automatically on failure
 * @param dest Destination node ID
 * @param body Message body to send
 * @returns Promise that resolves with the response body
 */
export function retryRPC(dest: string, body: MessageBody): Promise<MessageBody>;

/**
 * Register a handler for a specific message type
 * @param type Message type to handle
 * @param handler Function to process messages of this type
 */
export function on(type: string, handler: MessageHandler): void;

/**
 * Start the main processing loop to handle incoming messages
 */
export function main(): void;
