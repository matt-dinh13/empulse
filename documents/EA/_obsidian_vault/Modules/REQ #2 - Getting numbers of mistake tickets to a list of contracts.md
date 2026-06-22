---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-8891 (CLM-2860) Sales Agents contract search limitation"
domain: "Modules"
element_id: 1799612
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ #2 - Getting numbers of mistake tickets to a list of contracts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-8891 (CLM-2860) Sales Agents contract search limitation

## 📝 Notes

Goal of this requirement is processing of some additional requirements in TCK module:

	
- modify the current endpoint to get count of mistake Tickets (category = 'CMS') in open statuses (STATUS in OpenTicketDefinition) based on list of related subjects of CONTRACT type (e.g. /tck/rest/TicketsCounts; query parameters: open statuses (yes/no), RelatedSubjects array)

## 📊 Appears In (1 diagrams)

- Custom: CBL-8891 (CLM-2860) Sales Agents contract search limitation
