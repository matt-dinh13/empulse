---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9602 Ignore repetitive business alerts"
domain: "Requirements Model"
element_id: 1770250
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9603 Lock mechanism for prepare and sign agreement requests

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9602 Ignore repetitive business alerts

## 📝 Notes

As a system, I will reject a request for prepare agreement or sign agreement if any other prepare agreement or sign agreement is already running.

Proposed solution:

	
- create a lock once application gets into prepare or sign agreement process
	
- when any other prepare or sign request is received, it will check if the application is "locked"
- if yes system will return failed response
- if no system will start processing the request and locking the application

## 🔗 Connections (1)

- → Realisation: [[LOR-9602 Ignore repetitive business alerts (Requirement 1770248)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9602 Ignore repetitive business alerts
- Custom: LOR-9603 Lock mechanism for prepare and sign agreement requests
