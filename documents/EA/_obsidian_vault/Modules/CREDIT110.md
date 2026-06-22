---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/Communication tables"
domain: "Modules"
element_id: 1309486
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 CREDIT110

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/Communication tables

## 📝 Notes

This message informs the banking system (OBS) that a new contract was created in HoSel or an existing contract was updated

## 🔗 Connections (2)

- → Usage: [[CommResult]]
- ← Dependency «transformation»: [[{DEL]ContractFullInfoRequest]]

## 📊 Appears In (2 diagrams)

- Logical: Contract - Communication tables
- Logical: Contract notifications - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| Evid Srv | number |  |
| Time Stamp | datetime |  |
| Owner | string |  |
| Result Code | CommResult |  |
| Account Number | string |  |
| Client Accounts | blob |  |
| Credit Amount | decimal |  |
| Credit Type | string |  |
| Cuid | number |  |
| Date Compl | datetime |  |
| Date End | datetime |  |
| Date Sign | datetime |  |
| EIR | decimal |  |
| Id Credit | number |  |
| Id Guarantee | number |  |
| Id Person | number |  |
| Id Result190 | number |  |
| Interest Rate | decimal |  |
| Prod Name | string |  |
| Product Advantage Code | blob |  |
| Sellerplace Code | string |  |
| Status | string |  |
| refinancedContracts | string |  |
| ExtRefinancedContracts | string |  |
