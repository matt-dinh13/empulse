# Service Eligibility Containers

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Eligibility Containers
- **Diagram ID**: 139125
- **Elements**: 13
- **Connectors**: 12

```mermaid
classDiagram
    class ValidationErrorDto["ValidationErrorDto"]
    class ServiceEligibilityContainerInputDtoCriteria["ServiceEligibilityContainerInputDtoCriteria"]
    class ServiceEligibilityContainerInputDto["ServiceEligibilityContainerInputDto"]
    class Service_Eligibility_Criterion_Parameter_Type["Service Eligibility Criterion Parameter Type"]
    class ServiceEligibilityCriterionParameterDto["ServiceEligibilityCriterionParameterDto"]
    class MOD_Service_Eligibility_Criteria_Type_Setting["{MOD}Service Eligibility Criteria Type Setting"]
    class Service_Eligibility_Criterion_Type["Service Eligibility Criterion Type"]
    class ServiceEligibilityCriterionDto["ServiceEligibilityCriterionDto"]
    class ServiceEligibilityContainerDto["ServiceEligibilityContainerDto"]
    class ServiceEligibilityContainersResponse["ServiceEligibilityContainersResponse"]
    class Paging["Paging"]
    class service_eligibility_containers["service-eligibility-containers"]
    class Product_catalog_API["Product catalog API"]
    service_eligibility_containers ..> ServiceEligibilityContainersResponse : unnamed
    ServiceEligibilityContainersResponse ..> ServiceEligibilityContainerDto : unnamed
    ServiceEligibilityContainerDto ..> ServiceEligibilityCriterionDto : unnamed
    ServiceEligibilityContainerInputDtoCriteria ..> ServiceEligibilityCriterionDto : unnamed
    ServiceEligibilityCriterionDto ..> Service_Eligibility_Criterion_Type : unnamed
    Service_Eligibility_Criterion_Parameter_Type ..> MOD_Service_Eligibility_Criteria_Type_Setting : unnamed
    Service_Eligibility_Criterion_Type ..> MOD_Service_Eligibility_Criteria_Type_Setting : unnamed
    ServiceEligibilityCriterionDto ..> ServiceEligibilityCriterionParameterDto : unnamed
    ServiceEligibilityCriterionParameterDto ..> Service_Eligibility_Criterion_Parameter_Type : unnamed
    service_eligibility_containers ..> ServiceEligibilityContainerInputDto : unnamed
    ServiceEligibilityContainerInputDto ..> ServiceEligibilityContainerInputDtoCriteria : unnamed
    Product_catalog_API ..> service_eligibility_containers : /service-eligibility-containers
```
