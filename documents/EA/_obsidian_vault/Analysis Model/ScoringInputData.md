---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS"
domain: "Analysis Model"
element_id: 1571057
diagrams: 1
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 ScoringInputData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS

## 📝 Notes

Calculated scoring input data for respective party.

For data source of individual items, see the Structure of PartyScoringInputDataWS response document.

## 🔗 Connections (11)

- ← Dependency: [[GetPartyScoringInputDataResponse]]
- → Dependency: [[LastApprovedApplicationData]]
- → Dependency: [[LastRejectedApplicationData]]
- → Dependency: [[PartyCommodityHistory]]
- → Dependency: [[{ADD}LastCancelledApplicationData]]
- → Dependency: [[LastFamilyApplicationData]]
- → Dependency: [[LastApplicationData]]
- → Dependency: [[LastActiveApplicationData]]
- → Dependency: [[PartyDocumentHistory]]
- → Dependency: [[PartyContactHistory]]
- → Dependency: [[PartyApplicationHistory]]

## 📊 Appears In (1 diagrams)

- Logical: PartyScoringInputDataWS - Get Party Scoring Input Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| lastApplicationData | LastApplicationData |  |
| lastActiveApplicationData | LastActiveApplicationData |  |
| lastApprovedApplicationData | LastApprovedApplicationData |  |
| lastCancelledApplicationData | LastCancelledApplicationData |  |
| lastRejectedApplicationData | LastRejectedApplicationData |  |
| lastFamilyApplicationData | LastFamilyApplicationData |  |
| partyApplicationHistory | PartyApplicationHistory |  |
| partyContactHistory | PartyContactHistory |  |
| partyCommodityHistory | PartyCommodityHistory |  |
| partyDocumentHistory | PartyDocumentHistory |  |
