---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Automatic jobs"
domain: "Modules"
element_id: 1800323
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Cleaning outbox tables - job

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Automatic jobs

## 📝 Notes

{ADD CLM-4061/}
Automatic job code: BSL_CLEANING_EVENT_OUTBOX
Description: Removing records from outbox tables older then 30 days. //From outbox tables is reading records Kafka connector and streaming them to Kafka
Used for: 

	
- Contract event outbox table
	
- Communication event outbox table


Number of starts min: 1 per day
Time of start: 23:00
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (1)

- → Dependency: [[Once a day]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Custom: CLM-4457 - TCK - create job for cleaning ticket event outbox table
