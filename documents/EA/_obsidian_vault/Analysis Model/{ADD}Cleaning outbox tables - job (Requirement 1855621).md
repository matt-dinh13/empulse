---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855621
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Cleaning outbox tables - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

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

- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Custom: CBL-11956 (CLM-4061 ) Complaints Data and Communication Data to Hadoop
