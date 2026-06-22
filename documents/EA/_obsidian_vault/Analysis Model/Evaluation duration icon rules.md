---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822337
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Evaluation duration icon rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

This rule describes conditions for display of evaluation duration icon.

Evaluation duration:
Meaning: Information about how long will take contract's evaluation
Source: Contract.Scoring.Evaluation_Duration according to the last run scoring (i.e. according to actual status of the contract):

	
- Status 'In pre-process' and sub-status 'LAP waiting' - Contract.Scoring.Evaluation_Request_Type = 'PRELIM'
	
- Status 'In process' and sub-status 'LAP waiting' - Contract.Scoring.Evaluation_Request_Type = 'MAIN'
	
- Status 'In process' and sub-status 'LAP waiting after offers' - Contract.Scoring.Evaluation_Request_Type = 'OFFERS'
	
- Otherwise empty.

Visibility rule: Displayed only if non-empty value exists (see source for detail)
Tooltip: Icon will contain tooltip which will contain textual information about evaluation duration
Other: Different icon will be displayed for each existing evaluation duration.

## 🔗 Connections (2)

- ← Dependency: [[Custom Search]]
- ← Dependency: [[Contracts in process]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
