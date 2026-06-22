---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Access Rights"
domain: "Analysis Model"
element_id: 1877207
diagrams: 4
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}13.076 Accept credit limit change documents

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Access Rights

## 📝 Notes

{ADD CSI-4104 /}
The use case present function for acceptance (sign) of Credit limit change Supplement documents. If the document is accepted, process continues with sending clip request to the AM.
If the document is rejected, the Credit limit change Supplement is canceled.
The use case is called via exposed web service

Example of the request: POST <bsl_env>/bsl/api/v1/credit-limit-change-supplement/accept
{
   "supplementId":"40000012640058",
   "clientResponse":"ACCEPT",
   "verificationData":{
      "verificationCode":"1239",
      "contactNumberVerification":"708123456",
      "verificationDate":"2020-08-31"
   }
}
{
   "supplementId":"40000012640022",
   "clientResponse":"REJECT"
   "reasonCode":"CLIP_REJECTED_BY_CLIENT"
}

## 🔗 Connections (6)

- ← Dependency: [[CreditLimitChangeSupplements (Interface 1862861)]]
- → Dependency: [[{MOD}13.205 Create contract supplement documents v2]]
- → Realisation: [[{ADD}13.076 Accept credit limit change documents]]
- → Realisation: [[13.108 Accept ALOP documents]]
- → Association: [[External system (Actor 1880866)]]
- → Dependency: [[Change status of Contract Supplement]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line
- Logical: CreditLimitChangeSupplements - Accept document
- Use Case: Credit Limit Change via messaging - Use Case model
