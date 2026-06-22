---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9501 to allow capturing industry for all economical statuses"
domain: "Requirements Model"
element_id: 1766326
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9629 Remove "employer required" validation in API process

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9501 to allow capturing industry for all economical statuses

## 📝 Notes

As an external system, I will be able to store employer related data even if economical status with employer_required=false is selected.


Proposed solution

	
- when economical status with employer_required=false is received via API, do not remove employer related data

## 🔗 Connections (1)

- → Realisation: [[LOR-9501 to allow capturing industry for all economical statuses]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9501 to allow capturing industry for all economical statuses
