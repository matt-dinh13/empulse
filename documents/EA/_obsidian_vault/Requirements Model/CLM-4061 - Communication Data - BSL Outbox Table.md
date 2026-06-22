---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11956 (CLM-4061 ) Complaints Data and Communication Data to Hadoop"
domain: "Requirements Model"
element_id: 1689167
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4061 - Communication Data - BSL Outbox Table

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11956 (CLM-4061 ) Complaints Data and Communication Data to Hadoop

## 📝 Notes

Goal of this task is:

	
- Rename CommunicationRecordCreatedSE to CommunicationRecordChangedSE
	
- Start to send this SE on all communication creation/updates (currently only communication creation from GUI)


	
- Start to send Kafka notification Communication Record Changed



Note: CLC module will read this data and send Kafka communication record created notification

## 📊 Appears In (1 diagrams)

- Custom: CBL-11956 (CLM-4061 ) Complaints Data and Communication Data to Hadoop
