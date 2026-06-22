---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5351 (CLM-1840) Archiving BSL Communication records"
domain: "Requirements Model"
element_id: 1457695
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Create new tables for historical data of Communication records and create a new job for moving of data from current to history table

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5351 (CLM-1840) Archiving BSL Communication records

## 📝 Notes

Following task is needed:

1/ Create a archived version of following tables
Communication Event
Communication Record
Communication Result Part

2/ Remove CommunicationRecord2Ticket DB relation (replaced by using of  ExternalID or skipped at all if new TCK is used for all countries)

3/ Create a job for initial archiving of old data (copy to archived tables and delete from current tables)

4/ Create s job for daily archiving of old data

Old data is defined as data older than defined COMM_HISTORY_LENGTH (in months) in global cfg.

## 📊 Appears In (1 diagrams)

- Custom: CBL-5351 (CLM-1840) Archiving BSL Communication records
