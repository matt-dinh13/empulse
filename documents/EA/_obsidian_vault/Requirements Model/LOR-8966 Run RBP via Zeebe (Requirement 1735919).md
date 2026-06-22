---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8412 BOS/Zeebe implementation of PST: consumers calling new APIs part 1"
domain: "Requirements Model"
element_id: 1735919
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8966 Run RBP via Zeebe

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8412 BOS/Zeebe implementation of PST: consumers calling new APIs part 1

## 📝 Notes

As a system I will start RBP scoring as process in Zeebe.

Proposed solution:

	
- integrate to Zeebe workflow API
	
- use processId from Zeebe (instead of PST.code) in RBP_SCORING
	
- process status notification from related Rabbit exchange

## 🔗 Connections (1)

- → Realisation: [[LOR-8412 BOS_Zeebe implementation of PST_ consumers calling new APIs part 1]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8412 BOS/Zeebe implementation of PST: consumers calling new APIs part 1
- Custom: LOR-8966 Run RBP via Zeebe
