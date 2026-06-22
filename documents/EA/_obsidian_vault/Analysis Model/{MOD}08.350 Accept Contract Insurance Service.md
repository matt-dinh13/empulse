---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Access Rights"
domain: "Analysis Model"
element_id: 1879836
diagrams: 5
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.350 Accept Contract Insurance Service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Access Rights

## 📝 Notes

The use case presents a web method for acceptation (or possibly rejection) of Contract Insurance by Client

URL example:
PUT .../v3/contractservices/insurance/accept
{
   "loanServiceId":"40000012640022",
   "clientResponse":"ACCEPT"
   "reasonCode":"INS_REJECTED_BY_CLIENT",
   "signDate":"2023-10-30T00:00:00.000+01:00"
}

## 🔗 Connections (7)

- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- → UseCase «include»: [[11.040 Activate insurance contract (UseCase 1879790)]]
- → Realisation: [[{ADD}08.350 Accept Contract Insurance Service]]
- → Dependency: [[{ADD}Accept ContractInsuranceService validations]]
- → UseCase «include»: [[11.110 Cancel insurance contract (UseCase 1878972)]]
- → UseCase «include»: [[11.020 Add insurance period (UseCase 1879775)]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Logical: CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan
- Logical: Contract Insurance Services - PUT: Accept Contract Insurance Service v3
- Use Case: Acceptation Insurance Service on CEL contract
- Use Case: Insurance Service Offers API - Use Case Model
