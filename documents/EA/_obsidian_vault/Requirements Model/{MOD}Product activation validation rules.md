---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/PH/BRPH-2423 - Debt Purchase Support in HOSEL"
domain: "Requirements Model"
element_id: 1878768
diagrams: 6
connections: 8
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Product activation validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/BRPH-2423 - Debt Purchase Support in HOSEL

## 📝 Notes

Validations processed before activation of product version. 

	
- If no other version of the same product in status Active exists and Product.ValidFrom < TODAY then error is displayed (MSG_NO_OTHER_VERSION).
	
- If Product.ValidTo < TODAY+1 then warning is displayed (MSG_VALID_TO_LTHAN_TMRW).
	
- If  no document container is assigned to product then warning is displayed (MSG_NO_PROD_CONT_RULE).
	
- If  no tariff is assigned to product anroducd Pt.ProductType <> SAI then error is displayed (MSG_NO_TARIFF).
	
- If  tariff for product is assigned and does not exist Active version for this tariff then error is displayed (MSG_TARIFF_NOT_ACTIVE).
	
- If  no commodity is assigned to product and initial transaction type = POS then warning is displayed (MSG_NO_COMMTYPE_FOR_INIT_TRANSAC_POS).
	
- If some DocumentType is defined for Product.ProductProfile which is printable during period of product validity (i.e. exists at least one flag CheckMoment for ProductProfileToDocumentType.WhenPrintable) and no PrintoutTemplate is assigned for product for such DocumentType then warning is displayed (MSG_NO_PRINTTEMPL_FOR_DOCUMENT).
	
- If any service is assigned to product and does not exist Active version for this service then error is displayed (MSG_SERVICE_NOT_ACTIVE).
	
- If validity of any service assigned to product does not cover interval of product validy (Service.ValidFrom > Product.ValidFrom or Service.ValidTo < Product.ValidTo) then warning is displayed (MSG_VALID_TIME_NOT_IN_INTERVAL).
	
- If (Product.UseFinancingScheme = False or Product.ProductProfile.ProductType = REL) and no product variant is defined for product  then error is displayed (MSG_NO_PROD_VARIANT).
	
- If Product.UseFinancingScheme = True and Product.ProductProfile.ProductType = CEL and no Financing Package is assigned to product  then error is displayed (MSG_NO_FIN_PACKAGE).
	
- If no terms and conditions are assigned to product then error is displayed (MSG_NO_TERMS_AND_CONDITIONS).
	
- If GlobalParameter.UseSalesArea = true and no area is assigned to product then error is displayed (MSG_NO_SALES_AREA_ASSIGNED_TO_PRODUCT).
	
- If Product.Tariff.Purpose not in (CEL_PRODUCT, REL_PRODUCT, empty) then warning is displayed (MSG_TARIncorrectTariffPurpose)
	
- If any service assigned to product is present in Service Relation with ServiceRelation.ServiceRelationType = INCLUSION and its inclusive service is not assigned to product as well then warning is displayed (MSG_INCLUSIVE_SERVICE_NOT_ASSIGNED).
	
- If no approval document is assigned to product then error is displayed (MSG_NO_APPROVAL_DOCUMENT).
	
- If Product.ProductType = SAI and product has no insurance service assigned then error is displayed (MSG_NO_INSURANCE_SERVICE).
	
- If Product.ProductType = SAI and Product.ProductFlag.ProductFlagType.Code.SAI_WITH_INSTALLMENT_SCHEDULE = false and product has no COP service assigned then error is displayed (MSG_NO_COP_SERVICE).
	
- If GlobalParameter.ProductSetMandatory = true and no ProductSet is assigned to product then error is displayed (MSG_NO_PRODUCT_SET).
	
- If globalParameter.useFinancingSchemeRELVariants (PCG_USE_RELFS_PRODUCT_VARIANTS) = 0 and Product.UseFinancingScheme = True and Product.ProductProfile.ProductType = REL and no service with serviceType = MTCACC is assigned to product then error is displayed (MSG_NO_MTCACC_SERVICE)
	
- If globalParameter.useFinancingSchemeRELVariants (PCG_USE_RELFS_PRODUCT_VARIANTS) = 0 and Product.UseFinancingScheme = True and Product.ProductProfile.ProductType = REL and no service with serviceType = ACCSTMT is assigned to product then warning is displayed (MSG_NO_ACCSTMT_SERVICE).
	
- If globalParameter.MtcaccServiceUsage (PCG_MTCACC_USAGE) = True and Product.ProductProfile.ProductType = REL and no service with serviceType = MTCACC is assigned to product then error is displayed (MSG_NO_MTCACC_SERVICE)
	
- If globalParameter.MtcaccServiceUsage (PCG_MTCACC_USAGE) = True and Product.ProductProfile.ProductType = REL and no service with serviceType = ACCSTMT is assigned to product then warning is displayed (MSG_NO_ACCSTMT_SERVICE).
	
- If Product.ProductFlag.ProductFlagType.Code.ACCEPT_VAR_PARAM_FROM_INPUT = False and (Product.ProductVariant.Terms or Product.Productvariant.InterestRate is empty) then error is displayed (MSG_MISSING_VARIANT_PARAM).
	
- If exists Product.Subvention where Purpose = ALTERNATIVE and there is no Product.Subvention where Purpose = STANDARD with the same Participant then error is displayed (MSG_MISSING_STANDARD_SUBV_PARTICIPANT).
	
- If exists Product.Subvention where Purpose = ALTERNATIVE and there is no Product.Subvention where Purpose = STANDARD with the same Participant and CommodityType then error is displayed (MSG_MISSING_STANDARD_PARTICIPANT_COMM_TYPE).


	
- If Product catalog Application properties.partner-scheme = true system check if Partner scheme code exists for product, obtaining it by Get partner scheme code with attributes productCode=Product.Code. If no partner scheme code is returned then warning is displayed.
	
- {ADD PCG-5611}PH only: If Product.ProductFlag.ProductFlagType.Code.DEBT_PURCHASE = true and Product.ProductType <> CEL and Product.InitialTransactionType <> CASH then error is displayed.{/ADD}

## 🔗 Connections (8)

- ← Dependency: [[Automatic Version activation processing]]
- ← Dependency: [[{DEL}PUT products]]
- ← Dependency: [[Product - validation]]
- ← Dependency: [[{MOD}POST products]]
- ← Dependency: [[{MOD}PUT products]]
- ← Dependency: [[{MOD}PUT product activations]]
- ← Dependency: [[{DEL}02.260 Activate product version manually]]
- → Dependency: [[Get partner scheme code]]

## 📊 Appears In (6 diagrams)

- Custom: PCG-5611 BRPH-2423 - Debt Purchase Support in HOSEL - PRC
- Custom: Validation Rules
- Custom: Validation Rules
- Use Case: Manage Product
- Use Case: Use case
- Use Case: Use Case
