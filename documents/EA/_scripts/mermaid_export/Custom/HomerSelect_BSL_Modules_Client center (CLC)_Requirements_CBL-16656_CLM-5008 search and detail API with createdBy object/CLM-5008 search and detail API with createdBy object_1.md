# CLM-5008 search and detail API with createdBy object

```mermaid
graph TD
    User["User"]
    getCommunicationDetail_getCommunicationDetail["getCommunicationDetail : getCommunicationDetail"]
    getExternalCommunicationDetail_getExternalCommunicationDetai["getExternalCommunicationDetail : getExternalCommunicationDetail"]
    searchCommunication_searchCommunication["searchCommunication : searchCommunication"]
    Common_Common["Common  : Common"]
    CLM_5008_search_and_detail_API_with_createdBy_object["CLM-5008 search and detail API with createdBy object"]
    CLM_5008_search_and_detail_API_with_createdBy_object -->|unnamed| Common_Common
    CLM_5008_search_and_detail_API_with_createdBy_object -->|unnamed| searchCommunication_searchCommunication
    CLM_5008_search_and_detail_API_with_createdBy_object -->|unnamed| getExternalCommunicationDetail_getExternalCommunicationDetai
    CLM_5008_search_and_detail_API_with_createdBy_object -->|unnamed| getCommunicationDetail_getCommunicationDetail
```
