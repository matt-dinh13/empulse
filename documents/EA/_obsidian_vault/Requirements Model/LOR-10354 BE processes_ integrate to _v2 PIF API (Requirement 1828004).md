---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination/LOR-10354 BE processes: integrate to /v2 PIF API"
domain: "Requirements Model"
element_id: 1828004
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-10354 BE processes: integrate to /v2 PIF API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination/LOR-10354 BE processes: integrate to /v2 PIF API

## 📝 Notes

As a system, I will use unmasked applicant's/client's data for back end processes.

Propose solution:
When BSL calls PIF with technical user lorTechUser to get applicant's/client's data, it will use unmasked values for its usage. Identified backend process include - prepare materials, create client after 1BoD, update client after 1BoD/2BoD, update client after approved RBP, etc.

## 🔗 Connections (1)

- → Realisation: [[LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination (Requirement 1827660)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-10354 BE processes: integrate to /v2 PIF API
