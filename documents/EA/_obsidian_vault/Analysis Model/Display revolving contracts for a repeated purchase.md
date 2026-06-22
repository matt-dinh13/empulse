---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Repeated POS transaction processing/Business Rules"
domain: "Analysis Model"
element_id: 1667460
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Display revolving contracts for a repeated purchase

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Repeated POS transaction processing/Business Rules

## 📝 Notes

This element describes the algorithm of how system searches and displays the client's revolving contracts applicable for a repeated purchase.

Input:

	
- CUID - client's unique identifier
	
- User - user, who triggered the operation
	
- CommodityData (optional) - data about financed commodities:
- Commodity category
- Commodity type
- Price
- Manufacturer (optional)
- Model (optional)


Output:

	
- CUID - client's unique identifier
	
- Contract - selected instance of contract
	
- CommodityData (optional) - data about financed commodity:
- Commodity category
- Commodity type
- Price
- Manufacturer (optional)
- Model (optional)


Steps:

	
- System checks whether the User has assigned the access right UC12_632. If not, algorithm ends and the calling use case continues with its next step.
	
- System finds all signed and active REL contracts for respective client (CUID from the input) by calling the GetContractListRequest (method of ContractWS) with following input parameters:

- cuid = CUID from the input
- filter.contractType = 'REL'
- filter.contractStatus = ('A', 'N')

If calling the service fails due to any reason or no contract is returned in the response (i.e. within GetContractListResponse.contracts.*), algorithm ends and the calling use case continues with its next step.
	
- System displays the list of found contracts by performing the following sub-steps:
3.1. System gets the detailed data about the found contracts by calling the GetContractDetailRequest (method of ContractWS) with contracts.contractCode = GetContractListResponse.contracts.contractCode for each such contract on the input. If calling the service fails due to any reason, algorithm ends and the calling use case continues with its next step.
3.2. System gets the detailed data about the products related to found contracts by calling the REST method of external system for each relevant product with following input parameters:
- productCode = GetContractDetailResponse.contracts.productCode
- productVersion = GetContractDetailResponse.contracts.productVersion
If calling the service fails due to any reason, algorithm ends and the calling use case continues with its next step.
3.3. System displays the modal window Revolving loan contract selection for repeated purchase with the list of found contracts.
	
- Within such window, user can proceed with one of the following ways:
- If user selects any contract from the provided list in order to use it for a repeated purchase by clicking the Cardless transaction request icon, system invokes the use case 12.632 Create request for POS transaction without card with respective CUID, Contract and CommodityData (when received more than one commodity from the calling use case, then only the data for the very first commodity from such list are passed further) on the input.
- If user clicks the Skip button, system closes the modal window and the calling use case continues with its next step.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.160 Search client]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Revolving loan contract selection
- Use Case: Fill in application
