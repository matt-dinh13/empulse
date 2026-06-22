---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with communication records"
domain: "Analysis Model"
element_id: 1878485
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Decide about requested source systems for searching communication records

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with communication records

## 📝 Notes

This object describes, how system decides about the requested source systems to be used during the search of the communication records.

Input:

	
- Data entered on the Filter search form.


Output:

	
- SourceSystem [0..n] - code of the requested source system to be used during the search of the communication records


Steps:

	
- System evaluates the value selected in the System combobox as follows:
  1.1.  In case the 'From CCH' option is selected, then system returns SourceSystem = 'CCH' to the calling object and algorithm ends.
  1.2.  In case the 'From CLC' option is selected, then system returns SourceSystem = 'CLC' to the calling object and algorithm ends.
  1.3.  In case the 'All recent' option is selected, then algorithm continues with the next (main) step.
  1.4.  Otherwise algorithm ends (with no specific SourceSystem returned to the calling object).
	
- System evaluates the CLC, Loxon, MSS, CCH and VBOT checkboxes as follows:
  2.1.  In case none of the checkboxes is ticked (or even visible), then algorithm ends with no specific SourceSystem returned to the calling object.
  2.2.  In case the CLC checkbox is ticked, then system adds 'CLC' into the SourceSystem list.
  2.3.  In case the Loxon checkbox is ticked, then system adds 'LCS' into the SourceSystem list.
  2.4.  In case the MSS checkbox is ticked, then system adds 'MSS' into the SourceSystem list.
  2.5.  In case the CCH checkbox is ticked, then system adds 'CCH' into the SourceSystem list.
  2.6.  In case the VBOT checkbox is ticked, then system adds 'VBOT' into the SourceSystem list.
	
- System takes each SourceSystem gathered within the previous step and returns them to the calling object.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[07.022 Show list of communication for application (UseCase 1736405)]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with communication records
