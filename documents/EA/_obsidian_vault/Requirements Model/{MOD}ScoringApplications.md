---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Requirements Model/In process/Risk/CBL-31041 (PST-763) Actual Salespoint on 0BOD Scoring Submission"
domain: "Requirements Model"
element_id: 1877876
diagrams: 2
connections: 7
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ScoringApplications

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Requirements Model/In process/Risk/CBL-31041 (PST-763) Actual Salespoint on 0BOD Scoring Submission

## 📝 Notes

/scoring/

## 🔗 Connections (7)

- ← Usage: [[Party scoring]]
- → Usage: [[ScoringResults]]
- → Usage: [[AdditionalScoringAttributes (Class 1877877)]]
- → Dependency: [[GetScoringApplications]]
- ← Generalization: [[GetScoringApplications]]
- ← Generalization: [[PostScoringApplications]]
- → Dependency: [[PostScoringApplications]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-31041 (PST-763) Actual Salespoint on 0BOD Scoring Submission
- Logical: PartyScoring v4

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| status | string |  |
| {ADD}actualSalesroom | string |  |
| salesroom | string |  |
| partyIdentifier | string |  |
| creationDate | datetime |  |
| createdBy | string |  |
| scoringResults | ScoringResults |  |
| additionalScoringAttributes | AdditionalScoringAttributes |  |
| sourceChannel | string |  |
| applicantId | string |  |
| triggeredBy | string |  |
| processType | string |  |
| externalIdentifier | string |  |
