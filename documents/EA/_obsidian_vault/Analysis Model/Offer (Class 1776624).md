---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store"
domain: "Analysis Model"
element_id: 1776624
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Offer

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store

## 📝 Notes

Instance of a single offer.

## 🔗 Connections (4)

- → Dependency: [[PossibleResponse]]
- → Dependency: [[Response (Class 1776627)]]
- ← Dependency: [[PartyOffers]]
- ← Usage: [[Offer (Class 1776645)]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Store API - Offer Controller (Management of customer offers)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| acqChannelCodes | string |  |
| creationTimestamp | string |  |
| crmPilotCode | string |  |
| deactivationReason | string |  |
| deactivationTimestamp | string |  |
| entryPoint | string |  |
| initTransactionType | string |  |
| jointLendingPartnerCode | string |  |
| lastResponse | Response |  |
| limitId | string |  |
| maxCreditAmount | number |  |
| maxMonthlyInst | number |  |
| minCashPayment | number |  |
| modificationTimestamp | string |  |
| offerId | string |  |
| offerIdSas | number |  |
| offerStatus | string |  |
| offerTypeCode | string |  |
| offerTypeName | string |  |
| offerValidTo | string |  |
| partyId | string |  |
| possibleResponses | PossibleResponse |  |
| pricingCategory | number |  |
| priority | number |  |
| productCodes | string |  |
| productType | string |  |
| sourceProcessId | string |  |
| relativeMinCashPayment | number |  |
