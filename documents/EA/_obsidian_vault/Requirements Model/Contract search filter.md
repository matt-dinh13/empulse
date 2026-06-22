---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office"
domain: "Requirements Model"
element_id: 1688823
diagrams: 1
connections: 2
tags:
  - usecase
  - requirements-model
---

# 🎯 Contract search filter

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office

## 📝 Notes

Input:

	
- user criteria
	
- system criteria


Steps:

	
- System filters contracts based on user criteria.
	
- System calls function Get system criteria based on configuration with input Filter code. Function returns list of system criteria.
	
- If list of criteria is not empty then system applies these criteria on result from user criteria filtering.
	
- System returns result from filtering.

## 🔗 Connections (2)

- → Realisation «Get system criteria»: [[{ADD}Get system contract search criteria based on configuration]]
- → UseCase «Get user criteria»: [[User (Actor 1688819)]]

## 📊 Appears In (1 diagrams)

- Custom: REQ #1 - Implement configurable contract search system crieria
