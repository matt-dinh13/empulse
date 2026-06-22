---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/Logical Data Model"
domain: "Analysis Model"
element_id: 1371288
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 SMS Template Body Parameter Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/Logical Data Model

## 📝 Notes

Enumeration of allowed parameters in template body (all parameters template body can contain), e.g. <title>, <clientName>, etc.

Each element belong to one of the following message templates: 

MSG_PAYMENT_PAIRED
MSG_PAYMENT_PAIRED_DPD
MSG_PAYMENT_PAIRED_DPD_0_PREPAYMENT
MSG_PAYMENT_PAIRED_DPD_0_NO_PREPAYMENT
{ADD CLM-1042}MSG_CEL_REWARD_SUCCESS
MSG_CEL_REWARD_MISSED{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[SMS Template Body Parameter]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| title |  |  |
| clientName |  |  |
| paymentAmount |  |  |
| contractNumber |  |  |
| remainingInstallment |  |  |
| remainingDebt |  |  |
| nextDueDate |  |  |
| chargedReward |  |  |
| startCELRewEP |  |  |
| endCELRewEP |  |  |
| estimatedReward |  |  |
| nextEstimatedReward |  |  |
| nextStartCELRewEP |  |  |
| nextEndCELRewEP |  |  |
| rewardAccountNumber |  |  |
