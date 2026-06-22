---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-9428 Prepare agreement: ignore request if another prepare is running"
domain: "Requirements Model"
element_id: 1762462
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9428 Prepare agreement: ignore request if another prepare is running

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-9428 Prepare agreement: ignore request if another prepare is running

## 📝 Notes

As a system, I will not start prepare agreement if there is earlier prepare agreement already running.

Proposed solution:
 

	
- introduce cache which will store information that prepare agreement was received/is running
	
- if another request for prepare agreement is receive but earlier prepare is running (check in the cache), then:
- SOAP v21
    -- this method is synchronous
    -- return error, because successful response expect PDF objects
- SOAP v22/REST
    -- this method is asynchronous
    -- when salesrooms in the two request is same -> request is ignored
    -- when salesrooms in the two request differ -> return failed notification
    -- when first prepare is finished (and notification send), remove the entry from cache
	
- set expiration date for the cache entries
- check statistics how long it usually takes from request to send notification
- set the expiration time, so most of the use cases are handled correctly

## 🔗 Connections (1)

- → Realisation: [[LOR-9181 Replace Document upload job with direct upload via DMS]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9428 Prepare agreement: ignore request if another prepare is running
