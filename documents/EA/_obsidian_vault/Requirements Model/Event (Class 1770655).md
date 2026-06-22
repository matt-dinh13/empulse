---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-7859 E2E POS: Retrieve Cancellation Reason using Web Services/LOR-8764 Process CSD notification of searchContractTransitionReason codelist"
domain: "Requirements Model"
element_id: 1770655
diagrams: 2
connections: 0
tags:
  - class
  - requirements-model
---

# 🔷 Event

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-7859 E2E POS: Retrieve Cancellation Reason using Web Services/LOR-8764 Process CSD notification of searchContractTransitionReason codelist

## 📝 Notes

Notification for contract transition reason change

Key for Codelist Value identification is code, codelist. Other attributes are subject of change. 

Notifications are processed asynchronously in CSD_IMPORT job. This job can be registered manually.

## 📊 Appears In (2 diagrams)

- Custom: LOR-8764 Process CSD notification of searchContractTransitionReason codelist
- Logical: Contract transition reason

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageId | string |  |
| type | string |  |
| code | string |  |
| businessId | string |  |
| request | string |  |
