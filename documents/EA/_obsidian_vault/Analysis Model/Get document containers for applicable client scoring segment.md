---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Documents - product AF/Other documents - product AF"
domain: "Analysis Model"
element_id: 1822825
diagrams: 6
connections: 10
tags:
  - requirement
  - analysis-model
---

# 📋 Get document containers for applicable client scoring segment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Documents - product AF/Other documents - product AF

## 📝 Notes

This element describes the algorithm of how system gets the document containers, which are applicable for respective client scoring segment.

Input:

	
- Application - processed application


Output:

	
- DocumentContainer (0..n) - document container applicable for respective client scoring segment


Steps:

	
- System takes the Application received on the input and gets a product from its related selected offer (i.e. Temporary_Application[Application]->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameter.Product_Code and .Product_Version).
If no product (offer) has been selected yet, no DocumentContainer is returned and algorithm ends.
	
- System gets all document containers assigned to such product according to the rule Get document containers for product with the respective ProductCode and ProductVersion on the input and filters those, which are applicable for the scoring segment of the applying client (i.e. DocumentContainer with ClientScoringSegmentCode = Temporary_Application->Contract->Client_Snapshot.Scoring_Segment).

Note: If the scoring segment is not defined on a client level (i.e. relevant Client_Snapshot object does not exist yet OR Client_Snapshot.Scoring_Segment is null), then default document containers are considered as applicable.
.
	
- System returns the filtered DocumentContainer(s) to the calling object.
	
- Algorithm ends.

## 🔗 Connections (10)

- ← Dependency: [[Other documents - product AF (GUIElement 1736187)]]
- ← Dependency: [[Primary identification documents - product AF (GUIElement 1736191)]]
- ← Dependency: [[{MOD}Document validation rule]]
- ← Dependency: [[Min number of documents]]
- ← Dependency: [[{MOD}01.082 Fill in application - 1BoD]]
- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- ← Dependency: [[Creation of document object]]
- → Dependency: [[Default document container]]
- ← Dependency: [[Document distribution in AF]]
- → Dependency: [[Get document containers for product]]

## 📊 Appears In (6 diagrams)

- Custom: Other documents - product AF
- Custom: Primary identification documents - product AF
- Custom: Product business rules
- Custom: Validation Rules
- Use Case: Fill in application - 1SP
- Use Case: Fill in application - 2SP
