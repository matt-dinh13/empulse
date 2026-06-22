---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25127 (CSI-3646) Display BNPL Credit Limit"
domain: "Requirements Model"
element_id: 1881245
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Account

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25127 (CSI-3646) Display BNPL Credit Limit

## 📝 Notes

This grid displays accounts information related to the contract

Note: grid can be hidden and error message can be displayed (see alternative scenario Get account balance in UC 01.210 Show contract detail)

## 🔗 Connections (2)

- → Dependency: [[{MOD}12.601 Show account detail]]
- → Dependency: [[12.613 Show account detail in AM]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-25127 (CSI-3646) Display BNPL Credit Limit
- Custom: Contract detail

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Account number | text |  |
| Available balance | Financial Amount |  |
| Hold balance | Financial Amount |  |
| Ledger balance | Financial Amount |  |
| {DEL}BNPL Available Balance | Financial Amount |  |
| {DEL}BNPL Credit Limit | Financial Amount |  |
| Functional Icons | Icons |  |
