---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-3379 (CLM-1558) Edit Ticketing Type & Subtype (Revise ticket)"
domain: "Modules"
element_id: 1799583
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#4 - Update function GET_TICKET_NUMBER to extract suffix

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-3379 (CLM-1558) Edit Ticketing Type & Subtype (Revise ticket)

## 📝 Notes

DB function extract Numeric part from TicketCode and create index for speed up searching via numeric part only.
Revised ticket contains also suffix part which has to be extracted also, see new rule {ADD}Extract parts from ticket code .

## 📊 Appears In (1 diagrams)

- Custom: CBL-3379 (CLM-1558) Edit Ticketing Type & Subtype (Revise ticket)
