// source: adapters/server/grpc/protobuf/service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.AppendEntriesRequest', null, global);
goog.exportSymbol('proto.AppendEntriesResponse', null, global);
goog.exportSymbol('proto.LogEntry', null, global);
goog.exportSymbol('proto.RequestVoteRequest', null, global);
goog.exportSymbol('proto.RequestVoteResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RequestVoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RequestVoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RequestVoteRequest.displayName = 'proto.RequestVoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RequestVoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RequestVoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RequestVoteResponse.displayName = 'proto.RequestVoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppendEntriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AppendEntriesRequest.repeatedFields_, null);
};
goog.inherits(proto.AppendEntriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppendEntriesRequest.displayName = 'proto.AppendEntriesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppendEntriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppendEntriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppendEntriesResponse.displayName = 'proto.AppendEntriesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LogEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LogEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LogEntry.displayName = 'proto.LogEntry';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RequestVoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RequestVoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RequestVoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RequestVoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    term: jspb.Message.getFieldWithDefault(msg, 1, 0),
    candidateId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastLogIndex: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastLogTerm: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RequestVoteRequest}
 */
proto.RequestVoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RequestVoteRequest;
  return proto.RequestVoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RequestVoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RequestVoteRequest}
 */
proto.RequestVoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTerm(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCandidateId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLastLogIndex(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLastLogTerm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RequestVoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RequestVoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RequestVoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RequestVoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTerm();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCandidateId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastLogIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLastLogTerm();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 term = 1;
 * @return {number}
 */
proto.RequestVoteRequest.prototype.getTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RequestVoteRequest} returns this
 */
proto.RequestVoteRequest.prototype.setTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string candidate_id = 2;
 * @return {string}
 */
proto.RequestVoteRequest.prototype.getCandidateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.RequestVoteRequest} returns this
 */
proto.RequestVoteRequest.prototype.setCandidateId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 last_log_index = 3;
 * @return {number}
 */
proto.RequestVoteRequest.prototype.getLastLogIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.RequestVoteRequest} returns this
 */
proto.RequestVoteRequest.prototype.setLastLogIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 last_log_term = 4;
 * @return {number}
 */
proto.RequestVoteRequest.prototype.getLastLogTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.RequestVoteRequest} returns this
 */
proto.RequestVoteRequest.prototype.setLastLogTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RequestVoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RequestVoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RequestVoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RequestVoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    term: jspb.Message.getFieldWithDefault(msg, 1, 0),
    voteGranted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RequestVoteResponse}
 */
proto.RequestVoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RequestVoteResponse;
  return proto.RequestVoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RequestVoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RequestVoteResponse}
 */
proto.RequestVoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTerm(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVoteGranted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RequestVoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RequestVoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RequestVoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RequestVoteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTerm();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVoteGranted();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int32 term = 1;
 * @return {number}
 */
proto.RequestVoteResponse.prototype.getTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RequestVoteResponse} returns this
 */
proto.RequestVoteResponse.prototype.setTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool vote_granted = 2;
 * @return {boolean}
 */
proto.RequestVoteResponse.prototype.getVoteGranted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.RequestVoteResponse} returns this
 */
proto.RequestVoteResponse.prototype.setVoteGranted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AppendEntriesRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppendEntriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.AppendEntriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppendEntriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppendEntriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    term: jspb.Message.getFieldWithDefault(msg, 1, 0),
    leaderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    prevLogIndex: jspb.Message.getFieldWithDefault(msg, 3, 0),
    prevLogTerm: jspb.Message.getFieldWithDefault(msg, 4, 0),
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.LogEntry.toObject, includeInstance),
    leaderCommit: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppendEntriesRequest}
 */
proto.AppendEntriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppendEntriesRequest;
  return proto.AppendEntriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppendEntriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppendEntriesRequest}
 */
proto.AppendEntriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTerm(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeaderId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrevLogIndex(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrevLogTerm(value);
      break;
    case 5:
      var value = new proto.LogEntry;
      reader.readMessage(value,proto.LogEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeaderCommit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppendEntriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppendEntriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppendEntriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppendEntriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTerm();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLeaderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrevLogIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPrevLogTerm();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.LogEntry.serializeBinaryToWriter
    );
  }
  f = message.getLeaderCommit();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 term = 1;
 * @return {number}
 */
proto.AppendEntriesRequest.prototype.getTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppendEntriesRequest} returns this
 */
proto.AppendEntriesRequest.prototype.setTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string leader_id = 2;
 * @return {string}
 */
proto.AppendEntriesRequest.prototype.getLeaderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppendEntriesRequest} returns this
 */
proto.AppendEntriesRequest.prototype.setLeaderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 prev_log_index = 3;
 * @return {number}
 */
proto.AppendEntriesRequest.prototype.getPrevLogIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppendEntriesRequest} returns this
 */
proto.AppendEntriesRequest.prototype.setPrevLogIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 prev_log_term = 4;
 * @return {number}
 */
proto.AppendEntriesRequest.prototype.getPrevLogTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppendEntriesRequest} returns this
 */
proto.AppendEntriesRequest.prototype.setPrevLogTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated LogEntry entries = 5;
 * @return {!Array<!proto.LogEntry>}
 */
proto.AppendEntriesRequest.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.LogEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.LogEntry, 5));
};


/**
 * @param {!Array<!proto.LogEntry>} value
 * @return {!proto.AppendEntriesRequest} returns this
*/
proto.AppendEntriesRequest.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.LogEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.LogEntry}
 */
proto.AppendEntriesRequest.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.LogEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AppendEntriesRequest} returns this
 */
proto.AppendEntriesRequest.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};


/**
 * optional int32 leader_commit = 6;
 * @return {number}
 */
proto.AppendEntriesRequest.prototype.getLeaderCommit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppendEntriesRequest} returns this
 */
proto.AppendEntriesRequest.prototype.setLeaderCommit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppendEntriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.AppendEntriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppendEntriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppendEntriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    term: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppendEntriesResponse}
 */
proto.AppendEntriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppendEntriesResponse;
  return proto.AppendEntriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppendEntriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppendEntriesResponse}
 */
proto.AppendEntriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTerm(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppendEntriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppendEntriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppendEntriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppendEntriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTerm();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int32 term = 1;
 * @return {number}
 */
proto.AppendEntriesResponse.prototype.getTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppendEntriesResponse} returns this
 */
proto.AppendEntriesResponse.prototype.setTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.AppendEntriesResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.AppendEntriesResponse} returns this
 */
proto.AppendEntriesResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LogEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.LogEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LogEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LogEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    term: jspb.Message.getFieldWithDefault(msg, 1, 0),
    command: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LogEntry}
 */
proto.LogEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LogEntry;
  return proto.LogEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LogEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LogEntry}
 */
proto.LogEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTerm(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LogEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LogEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LogEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LogEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTerm();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 term = 1;
 * @return {number}
 */
proto.LogEntry.prototype.getTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.LogEntry} returns this
 */
proto.LogEntry.prototype.setTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string command = 2;
 * @return {string}
 */
proto.LogEntry.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.LogEntry} returns this
 */
proto.LogEntry.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto);
