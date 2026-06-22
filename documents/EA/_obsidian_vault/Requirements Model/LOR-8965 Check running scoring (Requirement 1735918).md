---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8412 BOS/Zeebe implementation of PST: consumers calling new APIs part 1"
domain: "Requirements Model"
element_id: 1735918
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8965 Check running scoring

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8412 BOS/Zeebe implementation of PST: consumers calling new APIs part 1

## 📝 Notes

As a system I will check, if process instance of CalculateOffersLimits is running for particular CUID in Zeebe.

Proposed solution

	
- integrate to Zeebe Elastic search client
	
- if running process is found (response 200) then system displays error message, if running process is not found (response 404) system continues with running RBP

## 🔗 Connections (1)

- → Realisation: [[LOR-8412 BOS_Zeebe implementation of PST_ consumers calling new APIs part 1]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8412 BOS/Zeebe implementation of PST: consumers calling new APIs part 1
- Custom: LOR-8965 Check running scoring
