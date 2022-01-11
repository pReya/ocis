/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    
 ==========================================================*/
/**
 * Creates an account
 * request: AccountsService_CreateAccount
 * url: AccountsService_CreateAccountURL
 * method: AccountsService_CreateAccount_TYPE
 * raw_url: AccountsService_CreateAccount_RAW_URL
 * @param body - 
 */
export const AccountsService_CreateAccount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/accounts/accounts-create'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const AccountsService_CreateAccount_RAW_URL = function() {
  return '/api/v0/accounts/accounts-create'
}
export const AccountsService_CreateAccount_TYPE = function() {
  return 'post'
}
export const AccountsService_CreateAccountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/accounts/accounts-create'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes an account
 * request: AccountsService_DeleteAccount
 * url: AccountsService_DeleteAccountURL
 * method: AccountsService_DeleteAccount_TYPE
 * raw_url: AccountsService_DeleteAccount_RAW_URL
 * @param body - 
 */
export const AccountsService_DeleteAccount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/accounts/accounts-delete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const AccountsService_DeleteAccount_RAW_URL = function() {
  return '/api/v0/accounts/accounts-delete'
}
export const AccountsService_DeleteAccount_TYPE = function() {
  return 'post'
}
export const AccountsService_DeleteAccountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/accounts/accounts-delete'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Gets an account
 * request: AccountsService_GetAccount
 * url: AccountsService_GetAccountURL
 * method: AccountsService_GetAccount_TYPE
 * raw_url: AccountsService_GetAccount_RAW_URL
 * @param body - 
 */
export const AccountsService_GetAccount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/accounts/accounts-get'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const AccountsService_GetAccount_RAW_URL = function() {
  return '/api/v0/accounts/accounts-get'
}
export const AccountsService_GetAccount_TYPE = function() {
  return 'post'
}
export const AccountsService_GetAccountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/accounts/accounts-get'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates an account
 * request: AccountsService_UpdateAccount
 * url: AccountsService_UpdateAccountURL
 * method: AccountsService_UpdateAccount_TYPE
 * raw_url: AccountsService_UpdateAccount_RAW_URL
 * @param body - 
 */
export const AccountsService_UpdateAccount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/accounts/accounts-update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const AccountsService_UpdateAccount_RAW_URL = function() {
  return '/api/v0/accounts/accounts-update'
}
export const AccountsService_UpdateAccount_TYPE = function() {
  return 'post'
}
export const AccountsService_UpdateAccountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/accounts/accounts-update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a group
 * request: GroupsService_CreateGroup
 * url: GroupsService_CreateGroupURL
 * method: GroupsService_CreateGroup_TYPE
 * raw_url: GroupsService_CreateGroup_RAW_URL
 * @param body - 
 */
export const GroupsService_CreateGroup = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/accounts/groups-create'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupsService_CreateGroup_RAW_URL = function() {
  return '/api/v0/accounts/groups-create'
}
export const GroupsService_CreateGroup_TYPE = function() {
  return 'post'
}
export const GroupsService_CreateGroupURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/accounts/groups-create'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes a group
 * request: GroupsService_DeleteGroup
 * url: GroupsService_DeleteGroupURL
 * method: GroupsService_DeleteGroup_TYPE
 * raw_url: GroupsService_DeleteGroup_RAW_URL
 * @param body - 
 */
export const GroupsService_DeleteGroup = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/accounts/groups-delete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupsService_DeleteGroup_RAW_URL = function() {
  return '/api/v0/accounts/groups-delete'
}
export const GroupsService_DeleteGroup_TYPE = function() {
  return 'post'
}
export const GroupsService_DeleteGroupURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/accounts/groups-delete'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Gets an groups
 * request: GroupsService_GetGroup
 * url: GroupsService_GetGroupURL
 * method: GroupsService_GetGroup_TYPE
 * raw_url: GroupsService_GetGroup_RAW_URL
 * @param body - 
 */
export const GroupsService_GetGroup = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/accounts/groups-get'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupsService_GetGroup_RAW_URL = function() {
  return '/api/v0/accounts/groups-get'
}
export const GroupsService_GetGroup_TYPE = function() {
  return 'post'
}
export const GroupsService_GetGroupURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/accounts/groups-get'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Lists groups
 * request: GroupsService_ListGroups
 * url: GroupsService_ListGroupsURL
 * method: GroupsService_ListGroups_TYPE
 * raw_url: GroupsService_ListGroups_RAW_URL
 * @param body - 
 */
export const GroupsService_ListGroups = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/accounts/groups-list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupsService_ListGroups_RAW_URL = function() {
  return '/api/v0/accounts/groups-list'
}
export const GroupsService_ListGroups_TYPE = function() {
  return 'post'
}
export const GroupsService_ListGroupsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/accounts/groups-list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates a group
 * request: GroupsService_UpdateGroup
 * url: GroupsService_UpdateGroupURL
 * method: GroupsService_UpdateGroup_TYPE
 * raw_url: GroupsService_UpdateGroup_RAW_URL
 * @param body - 
 */
export const GroupsService_UpdateGroup = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/accounts/groups-update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupsService_UpdateGroup_RAW_URL = function() {
  return '/api/v0/accounts/groups-update'
}
export const GroupsService_UpdateGroup_TYPE = function() {
  return 'post'
}
export const GroupsService_UpdateGroupURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/accounts/groups-update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * group:addmember https://docs.microsoft.com/en-us/graph/api/group-post-members?view=graph-rest-1.0&tabs=http
 * request: GroupsService_AddMember
 * url: GroupsService_AddMemberURL
 * method: GroupsService_AddMember_TYPE
 * raw_url: GroupsService_AddMember_RAW_URL
 * @param groupId - The id of the group to add a member to
 * @param body - 
 */
export const GroupsService_AddMember = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/groups/{groupId}/members/$ref'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{groupId}', `${parameters['groupId']}`)
  if (parameters['groupId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: groupId'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupsService_AddMember_RAW_URL = function() {
  return '/api/v0/groups/{groupId}/members/$ref'
}
export const GroupsService_AddMember_TYPE = function() {
  return 'post'
}
export const GroupsService_AddMemberURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/groups/{groupId}/members/$ref'
  path = path.replace('{groupId}', `${parameters['groupId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * group:removemember https://docs.microsoft.com/en-us/graph/api/group-delete-members?view=graph-rest-1.0
 * request: GroupsService_RemoveMember
 * url: GroupsService_RemoveMemberURL
 * method: GroupsService_RemoveMember_TYPE
 * raw_url: GroupsService_RemoveMember_RAW_URL
 * @param groupId - The id of the group to remove a member from
 * @param accountId - The account id to remove
 * @param body - 
 */
export const GroupsService_RemoveMember = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/groups/{groupId}/members/{accountId}/$ref'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{groupId}', `${parameters['groupId']}`)
  if (parameters['groupId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: groupId'))
  }
  path = path.replace('{accountId}', `${parameters['accountId']}`)
  if (parameters['accountId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: accountId'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupsService_RemoveMember_RAW_URL = function() {
  return '/api/v0/groups/{groupId}/members/{accountId}/$ref'
}
export const GroupsService_RemoveMember_TYPE = function() {
  return 'post'
}
export const GroupsService_RemoveMemberURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/groups/{groupId}/members/{accountId}/$ref'
  path = path.replace('{groupId}', `${parameters['groupId']}`)
  path = path.replace('{accountId}', `${parameters['accountId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * group:listmembers https://docs.microsoft.com/en-us/graph/api/group-list-members?view=graph-rest-1.0
 * request: GroupsService_ListMembers
 * url: GroupsService_ListMembersURL
 * method: GroupsService_ListMembers_TYPE
 * raw_url: GroupsService_ListMembers_RAW_URL
 * @param id - The id of the group to list members from
 * @param body - 
 */
export const GroupsService_ListMembers = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/groups/{id}/members/$ref'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const GroupsService_ListMembers_RAW_URL = function() {
  return '/api/v0/groups/{id}/members/$ref'
}
export const GroupsService_ListMembers_TYPE = function() {
  return 'post'
}
export const GroupsService_ListMembersURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/groups/{id}/members/$ref'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: IndexService_RebuildIndex
 * url: IndexService_RebuildIndexURL
 * method: IndexService_RebuildIndex_TYPE
 * raw_url: IndexService_RebuildIndex_RAW_URL
 * @param body - 
 */
export const IndexService_RebuildIndex = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v0/index/rebuild'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const IndexService_RebuildIndex_RAW_URL = function() {
  return '/api/v0/index/rebuild'
}
export const IndexService_RebuildIndex_TYPE = function() {
  return 'post'
}
export const IndexService_RebuildIndexURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v0/index/rebuild'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* Lists accounts
* request: AccountsService_ListAccounts
* url: AccountsService_ListAccountsURL
* method: AccountsService_ListAccounts_TYPE
* raw_url: AccountsService_ListAccounts_RAW_URL
     * @param pageSize - Optional. The maximum number of accounts to return in the response.
     * @param pageToken - Optional. A pagination token returned from a previous call to `Get`
that indicates from where search should continue.
     * @param fieldMask - Optional. Used to specify a subset of fields that should be
returned by a get operation or modified by an update operation.
     * @param query - Optional. Search criteria used to select the accounts to return.
If no search criteria is specified then all accounts will be
returned. TODO update query language
Query expressions can be used to restrict results based upon
the account properties where the operators `=`, `NOT`, `AND` and `OR`
can be used along with the suffix wildcard symbol `*`.

The string properties in a query expression should use escaped quotes
for values that include whitespace to prevent unexpected behavior.

Some example queries are:

* Query `display_name=Th*` returns accounts whose display_name
starts with "Th"
* Query `email=foo@example.com` returns accounts with
`email` set to `foo@example.com`
* Query `display_name=\\"Test String\\"` returns accounts with
display names that include both "Test" and "String"
*/
export const AccountsService_ListAccounts = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/graph/v1.0/users'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['pageToken'] !== undefined) {
    queryParameters['pageToken'] = parameters['pageToken']
  }
  if (parameters['fieldMask'] !== undefined) {
    queryParameters['fieldMask'] = parameters['fieldMask']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const AccountsService_ListAccounts_RAW_URL = function() {
  return '/graph/v1.0/users'
}
export const AccountsService_ListAccounts_TYPE = function() {
  return 'get'
}
export const AccountsService_ListAccountsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/graph/v1.0/users'
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['pageToken'] !== undefined) {
    queryParameters['pageToken'] = parameters['pageToken']
  }
  if (parameters['fieldMask'] !== undefined) {
    queryParameters['fieldMask'] = parameters['fieldMask']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}