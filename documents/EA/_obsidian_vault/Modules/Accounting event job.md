---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Accounting Events"
domain: "Modules"
element_id: 1742121
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Accounting event job

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Accounting Events

## 📝 Notes

{ADD IS-1875}

1. SCHEDULED (90_Job):
- Scheduled job is running every day (end of day)
- For each contract fulfilling the event criteria (= treshold + 1) new account event request is created with trigger date = previous day before midnight  - events are defined in enumeration Accounting Event Type 

2. REQ_JOB:
- evaluate and send accounting event requests with trigger date < current date:
-- Record is created in Account Event domain
-- DEFAULT_DATE (for DPD_90) /CURED_CHECK_DATE (for DPD_0) is filled in Contract domain
-- Event is sent to rabbit

3. CURE_JOB
- process online event for DPD_0 
 - CURE: DEFAULT_DATE is not null and CURED_CHECK_DATE >= 90 days

## 🔗 Connections (2)

- → Dependency: [[Accounting Even Type]]
- → Dependency: [[Accounting Event]]

## 📊 Appears In (1 diagrams)

- Custom: Accounting Events
