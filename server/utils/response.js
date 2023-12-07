const _response = function (reply, status, data, info) {
  const obj = {
    data,
    ...info,
    ...status
  }
  reply.statusCode = status.statusCode
  reply.send(obj)
}

const _validResponse = function (reply, data) {
  if (data?.status == 'BAD_REQUEST' || data == 'INVALID_PARAMS' || data?.status == 'INVALID_PARAMS') {
    _response(reply, CODE_400, data)
    return
  } else if (data == 'UNAUTHORIZED' || data?.status == 'UNAUTHORIZED') {
    _response(reply, CODE_401, data)
    return
  } else if (data == 'FORBIDDEN' || data?.status == 'FORBIDDEN') {
    _response(reply, CODE_403, data)
    return
  } else if (data == 'NOT_FOUND' || data?.status == 'NOT_FOUND') {
    // note: will return "data": "NOT_FOUND"
    _response(reply, CODE_404, data)
    return
  } else if (!data) {
    _response(reply, CODE_404, data)
    return
  }

  return true
}

const responder = function (reply, data, info) {
  // handle if returning data with error status code
  if (data?.statusCode == 403) {
    _response(reply, CODE_403, data.data)
    return
  }

  if (!_validResponse(reply, data)) return

  _response(reply, {
    status: 'OK',
    statusCode: 200,
  }, data, info)
}

const CODE_401 = {
  status: 'UNAUTHORIZED',
  statusCode: 401
}

const CODE_403 = {
  status: 'FORBIDDEN',
  statusCode: 403
}

const CODE_404 = {
  status: 'NOT_FOUND',
  statusCode: 404
}

const CODE_400 = {
  status: 'BAD_REQUEST',
  statusCode: 400
}

module.exports.responder = responder

// default response
module.exports.CONFLICT = {
  status: 'CONFLICT',
  statusCode: 409
}