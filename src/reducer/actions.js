// actions.js

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_STORE_REQUEST = 'FETCH_STORE_REQUEST';
export const FETCH_STORE_SUCCESS = 'FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAILURE = 'FETCH_STORE_FAILURE';
export const CREATE_STORE_REQUEST = 'CREATE_STORE_REQUEST';
export const CREATE_STORE_SUCCESS = 'CREATE_STORE_SUCCESS';
export const CREATE_STORE_FAILURE = 'CREATE_STORE_FAILURE';
export const LOGIN_STORE_REQUEST = 'LOGIN_STORE_REQUEST';
export const LOGIN_STORE_SUCCESS = 'LOGIN_STORE_SUCCESS';
export const LOGIN_STORE_FAILURE = 'LOGIN_STORE_FAILURE';
export const REGISITION_STORE_REQUEST = 'REGISITION_STORE_REQUEST';
export const REGISITION_STORE_SUCCESS = 'REGISITION_STORE_SUCCESS';
export const REGISITION_STORE_FAILURE = 'REGISITION_STORE_FAILURE';
export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';
export const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST';
export const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS';
export const ORDER_LIST_FAILURE = 'ORDER_LIST_FAILURE';
export const PRODUCT_IB_BY_REQUEST = 'PRODUCT_IB_BY_REQUEST';
export const PRODUCT_IB_BY_SUCCESS = 'PRODUCT_IB_BY_SUCCESS';
export const PRODUCT_IB_BY_FAILURE = 'PRODUCT_IB_BY_FAILURE';
export const BRAND_IB_BY_REQUEST = 'BRAND_IB_BY_REQUEST';
export const BRAND_IB_BY_SUCCESS = 'BRAND_IB_BY_SUCCESS';
export const BRAND_IB_BY_FAILURE = 'BRAND_IB_BY_FAILURE';
export const ADDCARD_IB_BY_REQUEST = 'ADDCARD_IB_BY_REQUEST';
export const ADDCARD_IB_BY_SUCCESS = 'ADDCARD_IB_BY_SUCCESS';
export const ADDCARD_IB_BY_FAILURE = 'ADDCARD_IB_BY_FAILURE';
export const GET_ADDCARD_IB_BY_REQUEST = 'GET_ADDCARD_IB_BY_REQUEST';
export const GET_ADDCARD_IB_BY_SUCCESS = 'GET_ADDCARD_IB_BY_SUCCESS';
export const GET_ADDCARD_IB_BY_FAILURE = 'GET_ADDCARD_IB_BY_FAILURE';
export const DELETE_ADDCARD_IB_BY_REQUEST = 'DELETE_ADDCARD_IB_BY_REQUEST';
export const DELETE_ADDCARD_IB_BY_SUCCESS = 'DELETE_ADDCARD_IB_BY_SUCCESS';
export const DELETE_ADDCARD_IB_BY_FAILURE = 'DELETE_ADDCARD_IB_BY_FAILURE';
export const EDIT_PRODUCT_ID_REQUEST = 'EDIT_PRODUCT_ID_REQUEST';
export const EDIT_PRODUCT_ID_SUCCESS = 'EDIT_PRODUCT_ID_SUCCESS';
export const EDIT_PRODUCT_ID_FAILURE = 'EDIT_PRODUCT_ID_FAILURE';
export const DELETE_PRODUCT_ID_REQUEST = 'DELETE_PRODUCT_ID_REQUEST';
export const DELETE_PRODUCT_ID_SUCCESS = 'DELETE_PRODUCT_ID_SUCCESS';
export const DELETE_PRODUCT_ID_FAILURE = 'DELETE_PRODUCT_ID_FAILURE';
export const ADD_PRODUCT_ID_REQUEST = 'ADD_PRODUCT_ID_REQUEST';
export const ADD_PRODUCT_ID_SUCCESS = 'ADD_PRODUCT_ID_SUCCESS';
export const ADD_PRODUCT_ID_FAILURE = 'ADD_PRODUCT_ID_FAILURE';
export const USER_RESPONCE_REQUEST = 'USER_RESPONCE_REQUEST';
export const USER_RESPONCE_SUCCESS = 'USER_RESPONCE_SUCCESS';
export const USER_RESPONCE_FAILURE = 'USER_RESPONCE_FAILURE';
export const ADMIN_LIST_RESPONCE_REQUEST = 'ADMIN_LIST_RESPONCE_REQUEST';
export const ADMIN_LIST_RESPONCE_SUCCESS = 'ADMIN_LIST_RESPONCE_SUCCESS';
export const ADMIN_LIST_RESPONCE_FAILURE = 'ADMIN_LIST_RESPONCE_FAILURE';
export const GET_STAFF_LIST_REQUEST = 'GET_STAFF_LIST_REQUEST';
export const GET_STAFF_LIST_SUCCESS = 'GET_STAFF_LIST_SUCCESS';
export const GET_STAFF_LIST_FAILURE = 'GET_STAFF_LIST_FAILURE';
export const GET_PROFILE_LIST_REQUEST = 'GET_PROFILE_LIST_REQUEST';
export const GET_PROFILE_LIST_SUCCESS = 'GET_PROFILE_LIST_SUCCESS';
export const GET_PROFILE_LIST_FAILURE = 'GET_PROFILE_LIST_FAILURE';
export const ADD_EMPLOYEE_REQUEST = 'ADD_EMPLOYEE_REQUEST';
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE';
export const GET_COUPON_LIST_REQUEST = 'GET_COUPON_LIST_REQUEST';
export const GET_COUPON_LIST_SUCCESS = 'GET_COUPON_LIST_SUCCESS';
export const GET_COUPON_LIST_FAILURE = 'GET_COUPON_LIST_FAILURE';
export const GET_EVENTS_LIST_REQUEST = 'GET_EVENTS_LIST_REQUEST';
export const GET_EVENTS_LIST_SUCCESS = 'GET_EVENTS_LIST_SUCCESS';
export const GET_EVENTS_LIST_FAILURE = 'GET_EVENTS_LIST_FAILURE';
export const GET_BLOGS_LIST_REQUEST = 'GET_BLOGS_LIST_REQUEST';
export const GET_BLOGS_LIST_SUCCESS = 'GET_BLOGS_LIST_SUCCESS';
export const GET_BLOGS_LIST_FAILURE = 'GET_BLOGS_LIST_FAILURE';
export const GET_COUPON_IB_BY_REQUEST = 'GET_COUPON_IB_BY_REQUEST';
export const GET_COUPON_IB_BY_SUCCESS = 'GET_COUPON_IB_BY_SUCCESS';
export const GET_COUPON_IB_BY_FAILURE = 'GET_COUPON_IB_BY_FAILURE';
export const ADD_EVENTS_LIST_REQUEST = 'ADD_EVENTS_LIST_REQUEST';
export const ADD_EVENTS_LIST_SUCCESS = 'ADD_EVENTS_LIST_SUCCESS';
export const ADD_EVENTS_LIST_FAILURE = 'ADD_EVENTS_LIST_FAILURE';
export const ADD_BLOGS_LIST_REQUEST = 'ADD_BLOGS_LIST_REQUEST';
export const ADD_BLOGS_LIST_SUCCESS = 'ADD_BLOGS_LIST_SUCCESS';
export const ADD_BLOGS_LIST_FAILURE = 'ADD_BLOGS_LIST_FAILURE';
export const SUB_BRAND_IB_BY_REQUEST = 'SUB_BRAND_IB_BY_REQUEST';
export const SUB_BRAND_IB_BY_SUCCESS = 'SUB_BRAND_IB_BY_SUCCESS';
export const SUB_BRAND_IB_BY_FAILURE = 'SUB_BRAND_IB_BY_FAILURE';

export const ADD_TRACK_LIST_REQUEST = 'ADD_TRACK_LIST_REQUEST';
export const ADD_TRACK_LIST_SUCCESS = 'ADD_TRACK_LIST_SUCCESS';
export const ADD_TRACK_LIST_FAILURE = 'ADD_TRACK_LIST_FAILURE';


export const MICROSITE_IB_BY_REQUEST = 'MICROSITE_LIST_REQUEST';
export const MICROSITE_IB_BY_SUCCESS = 'MICROSITE_LIST_SUCCESS';
export const MICROSITE_IB_BY_FAILURE = 'MICROSITE_LIST_FAILURE';
export const ADD_MICROSITE_LIST_REQUEST = 'ADD_MICROSITE_LIST_REQUEST';
export const ADD_MICROSITE_LIST_SUCCESS = 'ADD_MICROSITE_LIST_SUCCESS';
export const ADD_MICROSITE_LIST_FAILURE = 'ADD_MICROSITE_LIST_FAILURE';
export const Edit_MICROSITE_LIST_REQUEST = 'Edit_MICROSITE_LIST_REQUEST';
export const Edit_MICROSITE_LIST_SUCCESS = 'Edit_MICROSITE_LIST_SUCCESS';
export const Edit_MICROSITE_LIST_FAILURE = 'Edit_MICROSITE_LIST_FAILURE';
export const Delete_MICROSITE_LIST_REQUEST = 'Delete_MICROSITE_LIST_REQUEST';
export const Delete_MICROSITE_LIST_SUCCESS = 'Delete_MICROSITE_LIST_SUCCESS';
export const Delete_MICROSITE_LIST_FAILURE = 'Delete_MICROSITE_LIST_FAILURE';

export const MICROSITEDETAIL_IB_BY_REQUEST = 'MICROSITEDETAIL_LIST_REQUEST';
export const MICROSITEDETAIL_IB_BY_SUCCESS = 'MICROSITEDETAIL_LIST_SUCCESS';
export const MICROSITEDETAIL_IB_BY_FAILURE = 'MICROSITEDETAIL_LIST_FAILURE';
export const ADD_MICROSITEDETAIL_LIST_REQUEST = 'ADD_MICROSITEDETAIL_LIST_REQUEST';
export const ADD_MICROSITEDETAIL_LIST_SUCCESS = 'ADD_MICROSITEDETAIL_LIST_SUCCESS';
export const ADD_MICROSITEDETAIL_LIST_FAILURE = 'ADD_MICROSITEDETAIL_LIST_FAILURE';
export const Edit_MICROSITEDETAIL_LIST_REQUEST = 'Edit_MICROSITEDETAIL_LIST_REQUEST';
export const Edit_MICROSITEDETAIL_LIST_SUCCESS = 'Edit_MICROSITEDETAIL_LIST_SUCCESS';
export const Edit_MICROSITEDETAIL_LIST_FAILURE = 'Edit_MICROSITEDETAIL_LIST_FAILURE';
export const Delete_MICROSITEDETAIL_LIST_REQUEST = 'Delete_MICROSITEDETAIL_LIST_REQUEST';
export const Delete_MICROSITEDETAIL_LIST_SUCCESS = 'Delete_MICROSITEDETAIL_LIST_SUCCESS';
export const Delete_MICROSITEDETAIL_LIST_FAILURE = 'Delete_MICROSITEDETAIL_LIST_FAILURE';


export const FloorPlan_IB_BY_REQUEST = 'FloorPlan_LIST_REQUEST';
export const FloorPlan_IB_BY_SUCCESS = 'FloorPlan_LIST_SUCCESS';
export const FloorPlan_IB_BY_FAILURE = 'FloorPlan_LIST_FAILURE';
export const ADD_FloorPlan_LIST_REQUEST = 'ADD_FloorPlan_LIST_REQUEST';
export const ADD_FloorPlan_LIST_SUCCESS = 'ADD_FloorPlan_LIST_SUCCESS';
export const ADD_FloorPlan_LIST_FAILURE = 'ADD_FloorPlan_LIST_FAILURE';
export const Edit_FloorPlan_LIST_REQUEST = 'Edit_FloorPlan_LIST_REQUEST';
export const Edit_FloorPlan_LIST_SUCCESS = 'Edit_FloorPlan_LIST_SUCCESS';
export const Edit_FloorPlan_LIST_FAILURE = 'Edit_FloorPlan_LIST_FAILURE';
export const Delete_FloorPlan_LIST_REQUEST = 'Delete_FloorPlan_LIST_REQUEST';
export const Delete_FloorPlan_LIST_SUCCESS = 'Delete_FloorPlan_LIST_SUCCESS';
export const Delete_FloorPlan_LIST_FAILURE = 'Delete_FloorPlan_LIST_FAILURE';


export const Amenities_IB_BY_REQUEST = 'Amenities_LIST_REQUEST';
export const Amenities_IB_BY_SUCCESS = 'Amenities_LIST_SUCCESS';
export const Amenities_IB_BY_FAILURE = 'Amenities_LIST_FAILURE';
export const ADD_Amenities_LIST_REQUEST = 'ADD_Amenities_LIST_REQUEST';
export const ADD_Amenities_LIST_SUCCESS = 'ADD_Amenities_LIST_SUCCESS';
export const ADD_Amenities_LIST_FAILURE = 'ADD_Amenities_LIST_FAILURE';
export const Edit_Amenities_LIST_REQUEST = 'Edit_Amenities_LIST_REQUEST';
export const Edit_Amenities_LIST_SUCCESS = 'Edit_Amenities_LIST_SUCCESS';
export const Edit_Amenities_LIST_FAILURE = 'Edit_Amenities_LIST_FAILURE';
export const Delete_Amenities_LIST_REQUEST = 'Delete_Amenities_LIST_REQUEST';
export const Delete_Amenities_LIST_SUCCESS = 'Delete_Amenities_LIST_SUCCESS';
export const Delete_Amenities_LIST_FAILURE = 'Delete_Amenities_LIST_FAILURE';


export const Specifications_IB_BY_REQUEST = 'Specifications_LIST_REQUEST';
export const Specifications_IB_BY_SUCCESS = 'Specifications_LIST_SUCCESS';
export const Specifications_IB_BY_FAILURE = 'Specifications_LIST_FAILURE';
export const ADD_Specifications_LIST_REQUEST = 'ADD_Specifications_LIST_REQUEST';
export const ADD_Specifications_LIST_SUCCESS = 'ADD_Specifications_LIST_SUCCESS';
export const ADD_Specifications_LIST_FAILURE = 'ADD_Specifications_LIST_FAILURE';
export const Edit_Specifications_LIST_REQUEST = 'Edit_Specifications_LIST_REQUEST';
export const Edit_Specifications_LIST_SUCCESS = 'Edit_Specifications_LIST_SUCCESS';
export const Edit_Specifications_LIST_FAILURE = 'Edit_Specifications_LIST_FAILURE';
export const Delete_Specifications_LIST_REQUEST = 'Delete_Specifications_LIST_REQUEST';
export const Delete_Specifications_LIST_SUCCESS = 'Delete_Specifications_LIST_SUCCESS';
export const Delete_Specifications_LIST_FAILURE = 'Delete_Specifications_LIST_FAILURE';


export const SpecificationsDetail_IB_BY_REQUEST = 'SpecificationsDetail_LIST_REQUEST';
export const SpecificationsDetail_IB_BY_SUCCESS = 'SpecificationsDetail_LIST_SUCCESS';
export const SpecificationsDetail_IB_BY_FAILURE = 'SpecificationsDetail_LIST_FAILURE';
export const ADD_SpecificationsDetail_LIST_REQUEST = 'ADD_SpecificationsDetail_LIST_REQUEST';
export const ADD_SpecificationsDetail_LIST_SUCCESS = 'ADD_SpecificationsDetail_LIST_SUCCESS';
export const ADD_SpecificationsDetail_LIST_FAILURE = 'ADD_SpecificationsDetail_LIST_FAILURE';
export const Edit_SpecificationsDetail_LIST_REQUEST = 'Edit_SpecificationsDetail_LIST_REQUEST';
export const Edit_SpecificationsDetail_LIST_SUCCESS = 'Edit_SpecificationsDetail_LIST_SUCCESS';
export const Edit_SpecificationsDetail_LIST_FAILURE = 'Edit_SpecificationsDetail_LIST_FAILURE';
export const Delete_SpecificationsDetail_LIST_REQUEST = 'Delete_SpecificationsDetail_LIST_REQUEST';
export const Delete_SpecificationsDetail_LIST_SUCCESS = 'Delete_SpecificationsDetail_LIST_SUCCESS';
export const Delete_SpecificationsDetail_LIST_FAILURE = 'Delete_SpecificationsDetail_LIST_FAILURE';


export const BankApproval_IB_BY_REQUEST = 'BankApproval_LIST_REQUEST';
export const BankApproval_IB_BY_SUCCESS = 'BankApproval_LIST_SUCCESS';
export const BankApproval_IB_BY_FAILURE = 'BankApproval_LIST_FAILURE';
export const ADD_BankApproval_LIST_REQUEST = 'ADD_BankApproval_LIST_REQUEST';
export const ADD_BankApproval_LIST_SUCCESS = 'ADD_BankApproval_LIST_SUCCESS';
export const ADD_BankApproval_LIST_FAILURE = 'ADD_BankApproval_LIST_FAILURE';
export const Edit_BankApproval_LIST_REQUEST = 'Edit_BankApproval_LIST_REQUEST';
export const Edit_BankApproval_LIST_SUCCESS = 'Edit_BankApproval_LIST_SUCCESS';
export const Edit_BankApproval_LIST_FAILURE = 'Edit_BankApproval_LIST_FAILURE';
export const Delete_BankApproval_LIST_REQUEST = 'Delete_BankApproval_LIST_REQUEST';
export const Delete_BankApproval_LIST_SUCCESS = 'Delete_BankApproval_LIST_SUCCESS';
export const Delete_BankApproval_LIST_FAILURE = 'Delete_BankApproval_LIST_FAILURE';


export const LegalApproval_IB_BY_REQUEST = 'LegalApproval_LIST_REQUEST';
export const LegalApproval_IB_BY_SUCCESS = 'LegalApproval_LIST_SUCCESS';
export const LegalApproval_IB_BY_FAILURE = 'LegalApproval_LIST_FAILURE';
export const ADD_LegalApproval_LIST_REQUEST = 'ADD_LegalApproval_LIST_REQUEST';
export const ADD_LegalApproval_LIST_SUCCESS = 'ADD_LegalApproval_LIST_SUCCESS';
export const ADD_LegalApproval_LIST_FAILURE = 'ADD_LegalApproval_LIST_FAILURE';
export const Edit_LegalApproval_LIST_REQUEST = 'Edit_LegalApproval_LIST_REQUEST';
export const Edit_LegalApproval_LIST_SUCCESS = 'Edit_LegalApproval_LIST_SUCCESS';
export const Edit_LegalApproval_LIST_FAILURE = 'Edit_LegalApproval_LIST_FAILURE';
export const Delete_LegalApproval_LIST_REQUEST = 'Delete_LegalApproval_LIST_REQUEST';
export const Delete_LegalApproval_LIST_SUCCESS = 'Delete_LegalApproval_LIST_SUCCESS';
export const Delete_LegalApproval_LIST_FAILURE = 'Delete_LegalApproval_LIST_FAILURE';


export const Builder_IB_BY_REQUEST = 'Builder_LIST_REQUEST';
export const Builder_IB_BY_SUCCESS = 'Builder_LIST_SUCCESS';
export const Builder_IB_BY_FAILURE = 'Builder_LIST_FAILURE';
export const ADD_Builder_LIST_REQUEST = 'ADD_Builder_LIST_REQUEST';
export const ADD_Builder_LIST_SUCCESS = 'ADD_Builder_LIST_SUCCESS';
export const ADD_Builder_LIST_FAILURE = 'ADD_Builder_LIST_FAILURE';
export const Edit_Builder_LIST_REQUEST = 'Edit_Builder_LIST_REQUEST';
export const Edit_Builder_LIST_SUCCESS = 'Edit_Builder_LIST_SUCCESS';
export const Edit_Builder_LIST_FAILURE = 'Edit_Builder_LIST_FAILURE';
export const Delete_Builder_LIST_REQUEST = 'Delete_Builder_LIST_REQUEST';
export const Delete_Builder_LIST_SUCCESS = 'Delete_Builder_LIST_SUCCESS';
export const Delete_Builder_LIST_FAILURE = 'Delete_Builder_LIST_FAILURE';


export const PropStatus_IB_BY_REQUEST = 'PropStatus_LIST_REQUEST';
export const PropStatus_IB_BY_SUCCESS = 'PropStatus_LIST_SUCCESS';
export const PropStatus_IB_BY_FAILURE = 'PropStatus_LIST_FAILURE';
export const ADD_PropStatus_LIST_REQUEST = 'ADD_PropStatus_LIST_REQUEST';
export const ADD_PropStatus_LIST_SUCCESS = 'ADD_PropStatus_LIST_SUCCESS';
export const ADD_PropStatus_LIST_FAILURE = 'ADD_PropStatus_LIST_FAILURE';
export const Edit_PropStatus_LIST_REQUEST = 'Edit_PropStatus_LIST_REQUEST';
export const Edit_PropStatus_LIST_SUCCESS = 'Edit_PropStatus_LIST_SUCCESS';
export const Edit_PropStatus_LIST_FAILURE = 'Edit_PropStatus_LIST_FAILURE';
export const Delete_PropStatus_LIST_REQUEST = 'Delete_PropStatus_LIST_REQUEST';
export const Delete_PropStatus_LIST_SUCCESS = 'Delete_PropStatus_LIST_SUCCESS';
export const Delete_PropStatus_LIST_FAILURE = 'Delete_PropStatus_LIST_FAILURE';


export const PropType_IB_BY_REQUEST = 'PropType_LIST_REQUEST';
export const PropType_IB_BY_SUCCESS = 'PropType_LIST_SUCCESS';
export const PropType_IB_BY_FAILURE = 'PropType_LIST_FAILURE';
export const ADD_PropType_LIST_REQUEST = 'ADD_PropType_LIST_REQUEST';
export const ADD_PropType_LIST_SUCCESS = 'ADD_PropType_LIST_SUCCESS';
export const ADD_PropType_LIST_FAILURE = 'ADD_PropType_LIST_FAILURE';
export const Edit_PropType_LIST_REQUEST = 'Edit_PropType_LIST_REQUEST';
export const Edit_PropType_LIST_SUCCESS = 'Edit_PropType_LIST_SUCCESS';
export const Edit_PropType_LIST_FAILURE = 'Edit_PropType_LIST_FAILURE';
export const Delete_PropType_LIST_REQUEST = 'Delete_PropType_LIST_REQUEST';
export const Delete_PropType_LIST_SUCCESS = 'Delete_PropType_LIST_SUCCESS';
export const Delete_PropType_LIST_FAILURE = 'Delete_PropType_LIST_FAILURE';


export const MicrositeMetaTag_IB_BY_REQUEST = 'MicrositeMetaTag_LIST_REQUEST';
export const MicrositeMetaTag_IB_BY_SUCCESS = 'MicrositeMetaTag_LIST_SUCCESS';
export const MicrositeMetaTag_IB_BY_FAILURE = 'MicrositeMetaTag_LIST_FAILURE';
export const ADD_MicrositeMetaTag_LIST_REQUEST = 'ADD_MicrositeMetaTag_LIST_REQUEST';
export const ADD_MicrositeMetaTag_LIST_SUCCESS = 'ADD_MicrositeMetaTag_LIST_SUCCESS';
export const ADD_MicrositeMetaTag_LIST_FAILURE = 'ADD_MicrositeMetaTag_LIST_FAILURE';
export const Edit_MicrositeMetaTag_LIST_REQUEST = 'Edit_MicrositeMetaTag_LIST_REQUEST';
export const Edit_MicrositeMetaTag_LIST_SUCCESS = 'Edit_MicrositeMetaTag_LIST_SUCCESS';
export const Edit_MicrositeMetaTag_LIST_FAILURE = 'Edit_MicrositeMetaTag_LIST_FAILURE';
export const Delete_MicrositeMetaTag_LIST_REQUEST = 'Delete_MicrositeMetaTag_LIST_REQUEST';
export const Delete_MicrositeMetaTag_LIST_SUCCESS = 'Delete_MicrositeMetaTag_LIST_SUCCESS';
export const Delete_MicrositeMetaTag_LIST_FAILURE = 'Delete_MicrositeMetaTag_LIST_FAILURE';


export const MicrositePrice_IB_BY_REQUEST = 'MicrositePrice_LIST_REQUEST';
export const MicrositePrice_IB_BY_SUCCESS = 'MicrositePrice_LIST_SUCCESS';
export const MicrositePrice_IB_BY_FAILURE = 'MicrositePrice_LIST_FAILURE';
export const ADD_MicrositePrice_LIST_REQUEST = 'ADD_MicrositePrice_LIST_REQUEST';
export const ADD_MicrositePrice_LIST_SUCCESS = 'ADD_MicrositePrice_LIST_SUCCESS';
export const ADD_MicrositePrice_LIST_FAILURE = 'ADD_MicrositePrice_LIST_FAILURE';
export const Edit_MicrositePrice_LIST_REQUEST = 'Edit_MicrositePrice_LIST_REQUEST';
export const Edit_MicrositePrice_LIST_SUCCESS = 'Edit_MicrositePrice_LIST_SUCCESS';
export const Edit_MicrositePrice_LIST_FAILURE = 'Edit_MicrositePrice_LIST_FAILURE';
export const Delete_MicrositePrice_LIST_REQUEST = 'Delete_MicrositePrice_LIST_REQUEST';
export const Delete_MicrositePrice_LIST_SUCCESS = 'Delete_MicrositePrice_LIST_SUCCESS';
export const Delete_MicrositePrice_LIST_FAILURE = 'Delete_MicrositePrice_LIST_FAILURE';



export const fetchHeaderRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchHeaderSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchHeaderFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
export const fetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data,
});

export const fetchProductFailure = (error) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const fetchStoreRequest = () => ({
  type: FETCH_STORE_REQUEST,
});

export const fetchStoreSuccess = (data) => ({
  type: FETCH_STORE_SUCCESS,
  payload: data,
});

export const fetchStoreFailure = (error) => ({
  type: FETCH_STORE_FAILURE,
  payload: error,
});


export const CreateStoreRequest = () => ({
  type: CREATE_STORE_REQUEST,
});

export const CreateStoreSuccess = (data) => ({
  type: CREATE_STORE_SUCCESS,
  payload: data,
});

export const CreateStoreFailure = (error) => ({
  type: CREATE_STORE_FAILURE,
  payload: error,
});
export const LoginStoreRequest = () => ({
  type: LOGIN_STORE_REQUEST,
});

export const LoginStoreSuccess = (data) => ({
  type: LOGIN_STORE_SUCCESS,
  payload: data,
});

export const LoginStoreFailure = (error) => ({
  type: LOGIN_STORE_FAILURE,
  payload: error,
});

export const RegistionStoreRequest = () => ({
  type: REGISITION_STORE_REQUEST,
});

export const RegistionStoreSuccess = (data) => ({
  type: REGISITION_STORE_SUCCESS,
  payload: data,
});

export const RegistionStoreFailure = (error) => ({
  type: REGISITION_STORE_FAILURE,
  payload: error,
});

export const ProfileRequest = () => ({
  type: PROFILE_REQUEST,
});

export const ProfileSuccess = (data) => ({
  type: PROFILE_SUCCESS,
  payload: data,
});

export const ProfileFailure = (error) => ({
  type: PROFILE_FAILURE,
  payload: error,
});
export const UserDataRequest = () => ({
  type: USER_RESPONCE_REQUEST,
});

export const UserDataSuccess = (data) => ({
  type: USER_RESPONCE_SUCCESS,
  payload: data,
});

export const UserDataFailure = (error) => ({
  type: USER_RESPONCE_FAILURE,
  payload: error,
});

export const AdminDataRequest = () => ({
  type: ADMIN_LIST_RESPONCE_REQUEST,
});

export const AdminDataSuccess = (data) => ({
  type: ADMIN_LIST_RESPONCE_SUCCESS,
  payload: data,
});

export const AdminDataFailure = (error) => ({
  type: ADMIN_LIST_RESPONCE_FAILURE,
  payload: error,
});

export const EditProductRequest = () => ({
  type: EDIT_PRODUCT_ID_REQUEST,
});

export const EditProductSuccess = (data) => ({
  type: EDIT_PRODUCT_ID_SUCCESS,
  payload: data,
});

export const EditProductFailure = (error) => ({
  type: EDIT_PRODUCT_ID_FAILURE,
  payload: error,
});

export const DeleteProductRequest = () => ({
  type: DELETE_PRODUCT_ID_REQUEST,
});

export const DeleteProductSuccess = (data) => ({
  type: DELETE_PRODUCT_ID_SUCCESS,
  payload: data,
});

export const DeleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_ID_FAILURE,
  payload: error,
});

export const AddProductRequest = () => ({
  type: ADD_PRODUCT_ID_REQUEST,
});

export const AddProductSuccess = (data) => ({
  type: ADD_PRODUCT_ID_SUCCESS,
  payload: data,
});

export const AddProductFailure = (error) => ({
  type: ADD_PRODUCT_ID_FAILURE,
  payload: error,
});
export const OrderRequest = () => ({
  type: ORDER_LIST_REQUEST,
});

export const OrderSuccess = (data) => ({
  type: ORDER_LIST_SUCCESS,
  payload: data,
});

export const OrderFailure = (error) => ({
  type: ORDER_LIST_FAILURE,
  payload: error,
});
export const ProductIdRequest = () => ({
  type: PRODUCT_IB_BY_REQUEST,
});

export const ProductIdSuccess = (data) => ({
  type: PRODUCT_IB_BY_SUCCESS,
  payload: data,
});

export const ProductIdFailure = (error) => ({
  type: PRODUCT_IB_BY_FAILURE,
  payload: error,
});

export const BrandIdRequest = () => ({
  type: BRAND_IB_BY_REQUEST,
});

export const BrandIdSuccess = (data) => ({
  type: BRAND_IB_BY_SUCCESS,
  payload: data,
});

export const BrandIdFailure = (error) => ({
  type: BRAND_IB_BY_FAILURE,
  payload: error,
});
export const AddCardIdRequest = () => ({
  type: ADDCARD_IB_BY_REQUEST,
});

export const AddCardIdSuccess = (data) => ({
  type: ADDCARD_IB_BY_SUCCESS,
  payload: data,
});

export const AddCardIdFailure = (error) => ({
  type: ADDCARD_IB_BY_FAILURE,
  payload: error,
});
export const GetAddCardIdRequest = () => ({
  type: GET_ADDCARD_IB_BY_REQUEST,
});

export const GetAddCardIdSuccess = (data) => ({
  type: GET_ADDCARD_IB_BY_SUCCESS,
  payload: data,
});

export const GetAddCardIdFailure = (error) => ({
  type: GET_ADDCARD_IB_BY_FAILURE,
  payload: error,
});
export const DeleteAddCardIdRequest = () => ({
  type: DELETE_ADDCARD_IB_BY_REQUEST,
});

export const DeleteAddCardIdSuccess = (data) => ({
  type: DELETE_ADDCARD_IB_BY_SUCCESS,
  payload: data,
});

export const DeleteAddCardIdFailure = (error) => ({
  type: DELETE_ADDCARD_IB_BY_FAILURE,
  payload: error,
});

export const GetOurStaffRequest = () => ({
  type: GET_STAFF_LIST_REQUEST,
});

export const GetOurStaffSuccess = (data) => ({
  type: GET_STAFF_LIST_SUCCESS,
  payload: data,
});

export const GetOurStaffFailure = (error) => ({
  type: GET_STAFF_LIST_FAILURE,
  payload: error,
});

export const AddEmployeeRequest = () => ({
  type: ADD_EMPLOYEE_REQUEST,
});

export const AddEmployeeSuccess = (data) => ({
  type: ADD_EMPLOYEE_SUCCESS,
  payload: data,
});

export const AddEmployeeFailure = (error) => ({
  type: ADD_EMPLOYEE_FAILURE,
  payload: error,
});

export const GetProfileRequest = () => ({
  type: GET_PROFILE_LIST_REQUEST,
});

export const GetProfileSuccess = (data) => ({
  type: GET_PROFILE_LIST_SUCCESS,
  payload: data,
});

export const GetProfileFailure = (error) => ({
  type: GET_PROFILE_LIST_FAILURE,
  payload: error,
});

export const GetCouponsRequest = () => ({
  type: GET_COUPON_LIST_REQUEST,
});

export const GetCouponsSuccess = (data) => ({
  type: GET_COUPON_LIST_SUCCESS,
  payload: data,
});

export const GetCouponsFailure = (error) => ({
  type: GET_COUPON_LIST_FAILURE,
  payload: error,
});

export const GetEventsRequest = () => ({
  type: GET_EVENTS_LIST_REQUEST,
});

export const GetEventsSuccess = (data) => ({
  type: GET_EVENTS_LIST_SUCCESS,
  payload: data,
});

export const GetEventsFailure = (error) => ({
  type: GET_EVENTS_LIST_FAILURE,
  payload: error,
});
export const GetBlogsRequest = () => ({
  type: GET_BLOGS_LIST_REQUEST,
});

export const GetBlogsSuccess = (data) => ({
  type: GET_BLOGS_LIST_SUCCESS,
  payload: data,
});

export const GetBlogsFailure = (error) => ({
  type: GET_BLOGS_LIST_FAILURE,
  payload: error,
});

export const GetCouponRequest = () => ({
  type: GET_COUPON_IB_BY_REQUEST,
});

export const GetCouponSuccess = (data) => ({
  type: GET_COUPON_IB_BY_SUCCESS,
  payload: data,
});

export const GetCouponFailure = (error) => ({
  type: GET_COUPON_IB_BY_FAILURE,
  payload: error,
});

export const AddEventsRequest = () => ({
  type: ADD_EVENTS_LIST_REQUEST,
});

export const AddEventsSuccess = (data) => ({
  type: ADD_EVENTS_LIST_SUCCESS,
  payload: data,
});

export const AddEventsFailure = (error) => ({
  type: ADD_EVENTS_LIST_FAILURE,
  payload: error,
});

export const AddBlogsRequest = () => ({
  type: ADD_BLOGS_LIST_REQUEST,
});

export const AddBlogsSuccess = (data) => ({
  type: ADD_BLOGS_LIST_SUCCESS,
  payload: data,
});

export const AddBlogsFailure = (error) => ({
  type: ADD_BLOGS_LIST_FAILURE,
  payload: error,
});

export const SubBrandIdRequest = () => ({
  type: SUB_BRAND_IB_BY_REQUEST,
});

export const SubBrandIdSuccess = (data) => ({
  type: SUB_BRAND_IB_BY_SUCCESS,
  payload: data,
});

export const SubBrandIdFailure = (error) => ({
  type: SUB_BRAND_IB_BY_FAILURE,
  payload: error,
});

export const AddTrackRequest = () => ({
  type: ADD_TRACK_LIST_REQUEST,
});

export const AddTrackSuccess = (data) => ({
  type: ADD_TRACK_LIST_SUCCESS,
  payload: data,
});

export const AddTrackFailure = (error) => ({
  type: ADD_TRACK_LIST_FAILURE,
  payload: error,
});




export const MicrositeIdRequest = () => ({
  type: MICROSITE_IB_BY_REQUEST,
});

export const MicrositeIdSuccess = (data) => ({
  type: MICROSITE_IB_BY_SUCCESS,
  payload: data,
});

export const MicrositeIdFailure = (error) => ({
  type: MICROSITE_IB_BY_FAILURE,
  payload: error,
});

export const AddMicrositeRequest = () => ({
  type: ADD_MICROSITE_LIST_REQUEST,
});

export const AddMicrositeSuccess = (data) => ({
  type: ADD_MICROSITE_LIST_SUCCESS,
  payload: data,
});

export const AddMicrositeFailure = (error) => ({
  type: ADD_MICROSITE_LIST_FAILURE,
  payload: error,
});


export const EditMicrositeRequest = () => ({
  type: Edit_MICROSITE_LIST_REQUEST,
});

export const EditMicrositeSuccess = (data) => ({
  type: Edit_MICROSITE_LIST_SUCCESS,
  payload: data,
});

export const EditMicrositeFailure = (error) => ({
  type: Edit_MICROSITE_LIST_FAILURE,
  payload: error,
});


export const DeleteMicrositeRequest = () => ({
  type: Delete_MICROSITE_LIST_REQUEST,
});

export const DeleteMicrositeSuccess = (data) => ({
  type: Delete_MICROSITE_LIST_SUCCESS,
  payload: data,
});

export const DeleteMicrositeFailure = (error) => ({
  type: Delete_MICROSITE_LIST_FAILURE,
  payload: error,
});


/**************** Microsite Detail ***************/


export const MicrositeDetailIdRequest = () => ({
  type: MICROSITEDETAIL_IB_BY_REQUEST,
});

export const MicrositeDetailIdSuccess = (data) => ({
  type: MICROSITEDETAIL_IB_BY_SUCCESS,
  payload: data,
});

export const MicrositeDetailIdFailure = (error) => ({
  type: MICROSITEDETAIL_IB_BY_FAILURE,
  payload: error,
});

export const AddMicrositeDetailRequest = () => ({
  type: ADD_MICROSITEDETAIL_LIST_REQUEST,
});

export const AddMicrositeDetailSuccess = (data) => ({
  type: ADD_MICROSITEDETAIL_LIST_SUCCESS,
  payload: data,
});

export const AddMicrositeDetailFailure = (error) => ({
  type: ADD_MICROSITEDETAIL_LIST_FAILURE,
  payload: error,
});

export const EditMicrositeDetailRequest = () => ({
  type: Edit_MICROSITEDETAIL_LIST_REQUEST,
});

export const EditMicrositeDetailSuccess = (data) => ({
  type: Edit_MICROSITEDETAIL_LIST_SUCCESS,
  payload: data,
});

export const EditMicrositeDetailFailure = (error) => ({
  type: Edit_MICROSITEDETAIL_LIST_FAILURE,
  payload: error,
});

export const DeleteMicrositeDetailRequest = () => ({
  type: Delete_MICROSITEDETAIL_LIST_REQUEST,
});

export const DeleteMicrositeDetailSuccess = (data) => ({
  type: Delete_MICROSITEDETAIL_LIST_SUCCESS,
  payload: data,
});

export const DeleteMicrositeDetailFailure = (error) => ({
  type: Delete_MICROSITEDETAIL_LIST_FAILURE,
  payload: error,
});



/****************** Floor Plan ****************/

export const FloorPlanIdRequest = () => ({
  type: FloorPlan_IB_BY_REQUEST,
});

export const FloorPlanIdSuccess = (data) => ({
  type: FloorPlan_IB_BY_SUCCESS,
  payload: data,
});

export const FloorPlanIdFailure = (error) => ({
  type: FloorPlan_IB_BY_FAILURE,
  payload: error,
});

export const AddFloorPlanRequest = () => ({
  type: ADD_FloorPlan_LIST_REQUEST,
});

export const AddFloorPlanSuccess = (data) => ({
  type: ADD_FloorPlan_LIST_SUCCESS,
  payload: data,
});

export const AddFloorPlanFailure = (error) => ({
  type: ADD_FloorPlan_LIST_FAILURE,
  payload: error,
});


export const EditFloorPlanRequest = () => ({
  type: Edit_FloorPlan_LIST_REQUEST,
});

export const EditFloorPlanSuccess = (data) => ({
  type: Edit_FloorPlan_LIST_SUCCESS,
  payload: data,
});

export const EditFloorPlanFailure = (error) => ({
  type: Edit_FloorPlan_LIST_FAILURE,
  payload: error,
});


export const DeleteFloorPlanRequest = () => ({
  type: Delete_FloorPlan_LIST_REQUEST,
});

export const DeleteFloorPlanSuccess = (data) => ({
  type: Delete_FloorPlan_LIST_SUCCESS,
  payload: data,
});

export const DeleteFloorPlanFailure = (error) => ({
  type: Delete_FloorPlan_LIST_FAILURE,
  payload: error,
});



/****************** Amenities ****************/

export const AmenitiesIdRequest = () => ({
  type: Amenities_IB_BY_REQUEST,
});

export const AmenitiesIdSuccess = (data) => ({
  type: Amenities_IB_BY_SUCCESS,
  payload: data,
});

export const AmenitiesIdFailure = (error) => ({
  type: Amenities_IB_BY_FAILURE,
  payload: error,
});

export const AddAmenitiesRequest = () => ({
  type: ADD_Amenities_LIST_REQUEST,
});

export const AddAmenitiesSuccess = (data) => ({
  type: ADD_Amenities_LIST_SUCCESS,
  payload: data,
});

export const AddAmenitiesFailure = (error) => ({
  type: ADD_Amenities_LIST_FAILURE,
  payload: error,
});


export const EditAmenitiesRequest = () => ({
  type: Edit_Amenities_LIST_REQUEST,
});

export const EditAmenitiesSuccess = (data) => ({
  type: Edit_Amenities_LIST_SUCCESS,
  payload: data,
});

export const EditAmenitiesFailure = (error) => ({
  type: Edit_Amenities_LIST_FAILURE,
  payload: error,
});


export const DeleteAmenitiesRequest = () => ({
  type: Delete_Amenities_LIST_REQUEST,
});

export const DeleteAmenitiesSuccess = (data) => ({
  type: Delete_Amenities_LIST_SUCCESS,
  payload: data,
});

export const DeleteAmenitiesFailure = (error) => ({
  type: Delete_Amenities_LIST_FAILURE,
  payload: error,
});



/****************** Specifications ****************/

export const SpecificationsIdRequest = () => ({
  type: Specifications_IB_BY_REQUEST,
});

export const SpecificationsIdSuccess = (data) => ({
  type: Specifications_IB_BY_SUCCESS,
  payload: data,
});

export const SpecificationsIdFailure = (error) => ({
  type: Specifications_IB_BY_FAILURE,
  payload: error,
});

export const AddSpecificationsRequest = () => ({
  type: ADD_Specifications_LIST_REQUEST,
});

export const AddSpecificationsSuccess = (data) => ({
  type: ADD_Specifications_LIST_SUCCESS,
  payload: data,
});

export const AddSpecificationsFailure = (error) => ({
  type: ADD_Specifications_LIST_FAILURE,
  payload: error,
});


export const EditSpecificationsRequest = () => ({
  type: Edit_Specifications_LIST_REQUEST,
});

export const EditSpecificationsSuccess = (data) => ({
  type: Edit_Specifications_LIST_SUCCESS,
  payload: data,
});

export const EditSpecificationsFailure = (error) => ({
  type: Edit_Specifications_LIST_FAILURE,
  payload: error,
});


export const DeleteSpecificationsRequest = () => ({
  type: Delete_Specifications_LIST_REQUEST,
});

export const DeleteSpecificationsSuccess = (data) => ({
  type: Delete_Specifications_LIST_SUCCESS,
  payload: data,
});

export const DeleteSpecificationsFailure = (error) => ({
  type: Delete_Specifications_LIST_FAILURE,
  payload: error,
});



/****************** Specifications Detail ****************/


export const SpecificationsDetailIdRequest = () => ({
  type: SpecificationsDetail_IB_BY_REQUEST,
});

export const SpecificationsDetailIdSuccess = (data) => ({
  type: SpecificationsDetail_IB_BY_SUCCESS,
  payload: data,
});

export const SpecificationsDetailIdFailure = (error) => ({
  type: SpecificationsDetail_IB_BY_FAILURE,
  payload: error,
});

export const AddSpecificationsDetailRequest = () => ({
  type: ADD_SpecificationsDetail_LIST_REQUEST,
});

export const AddSpecificationsDetailSuccess = (data) => ({
  type: ADD_SpecificationsDetail_LIST_SUCCESS,
  payload: data,
});

export const AddSpecificationsDetailFailure = (error) => ({
  type: ADD_SpecificationsDetail_LIST_FAILURE,
  payload: error,
});


export const EditSpecificationsDetailRequest = () => ({
  type: Edit_SpecificationsDetail_LIST_REQUEST,
});

export const EditSpecificationsDetailSuccess = (data) => ({
  type: Edit_SpecificationsDetail_LIST_SUCCESS,
  payload: data,
});

export const EditSpecificationsDetailFailure = (error) => ({
  type: Edit_SpecificationsDetail_LIST_FAILURE,
  payload: error,
});


export const DeleteSpecificationsDetailRequest = () => ({
  type: Delete_SpecificationsDetail_LIST_REQUEST,
});

export const DeleteSpecificationsDetailSuccess = (data) => ({
  type: Delete_SpecificationsDetail_LIST_SUCCESS,
  payload: data,
});

export const DeleteSpecificationsDetailFailure = (error) => ({
  type: Delete_SpecificationsDetail_LIST_FAILURE,
  payload: error,
});



/****************** BankApproval ****************/

export const BankApprovalIdRequest = () => ({
  type: BankApproval_IB_BY_REQUEST,
});

export const BankApprovalIdSuccess = (data) => ({
  type: BankApproval_IB_BY_SUCCESS,
  payload: data,
});

export const BankApprovalIdFailure = (error) => ({
  type: BankApproval_IB_BY_FAILURE,
  payload: error,
});

export const AddBankApprovalRequest = () => ({
  type: ADD_BankApproval_LIST_REQUEST,
});

export const AddBankApprovalSuccess = (data) => ({
  type: ADD_BankApproval_LIST_SUCCESS,
  payload: data,
});

export const AddBankApprovalFailure = (error) => ({
  type: ADD_BankApproval_LIST_FAILURE,
  payload: error,
});


export const EditBankApprovalRequest = () => ({
  type: Edit_BankApproval_LIST_REQUEST,
});

export const EditBankApprovalSuccess = (data) => ({
  type: Edit_BankApproval_LIST_SUCCESS,
  payload: data,
});

export const EditBankApprovalFailure = (error) => ({
  type: Edit_BankApproval_LIST_FAILURE,
  payload: error,
});


export const DeleteBankApprovalRequest = () => ({
  type: Delete_BankApproval_LIST_REQUEST,
});

export const DeleteBankApprovalSuccess = (data) => ({
  type: Delete_BankApproval_LIST_SUCCESS,
  payload: data,
});

export const DeleteBankApprovalFailure = (error) => ({
  type: Delete_BankApproval_LIST_FAILURE,
  payload: error,
});


/****************** LegalApproval ****************/

export const LegalApprovalIdRequest = () => ({
  type: LegalApproval_IB_BY_REQUEST,
});

export const LegalApprovalIdSuccess = (data) => ({
  type: LegalApproval_IB_BY_SUCCESS,
  payload: data,
});

export const LegalApprovalIdFailure = (error) => ({
  type: LegalApproval_IB_BY_FAILURE,
  payload: error,
});

export const AddLegalApprovalRequest = () => ({
  type: ADD_LegalApproval_LIST_REQUEST,
});

export const AddLegalApprovalSuccess = (data) => ({
  type: ADD_LegalApproval_LIST_SUCCESS,
  payload: data,
});

export const AddLegalApprovalFailure = (error) => ({
  type: ADD_LegalApproval_LIST_FAILURE,
  payload: error,
});


export const EditLegalApprovalRequest = () => ({
  type: Edit_LegalApproval_LIST_REQUEST,
});

export const EditLegalApprovalSuccess = (data) => ({
  type: Edit_LegalApproval_LIST_SUCCESS,
  payload: data,
});

export const EditLegalApprovalFailure = (error) => ({
  type: Edit_LegalApproval_LIST_FAILURE,
  payload: error,
});


export const DeleteLegalApprovalRequest = () => ({
  type: Delete_LegalApproval_LIST_REQUEST,
});

export const DeleteLegalApprovalSuccess = (data) => ({
  type: Delete_LegalApproval_LIST_SUCCESS,
  payload: data,
});

export const DeleteLegalApprovalFailure = (error) => ({
  type: Delete_LegalApproval_LIST_FAILURE,
  payload: error,
});


/****************** Builder ****************/

export const BuilderIdRequest = () => ({
  type: Builder_IB_BY_REQUEST,
});

export const BuilderIdSuccess = (data) => ({
  type: Builder_IB_BY_SUCCESS,
  payload: data,
});

export const BuilderIdFailure = (error) => ({
  type: Builder_IB_BY_FAILURE,
  payload: error,
});

export const AddBuilderRequest = () => ({
  type: ADD_Builder_LIST_REQUEST,
});

export const AddBuilderSuccess = (data) => ({
  type: ADD_Builder_LIST_SUCCESS,
  payload: data,
});

export const AddBuilderFailure = (error) => ({
  type: ADD_Builder_LIST_FAILURE,
  payload: error,
});


export const EditBuilderRequest = () => ({
  type: Edit_Builder_LIST_REQUEST,
});

export const EditBuilderSuccess = (data) => ({
  type: Edit_Builder_LIST_SUCCESS,
  payload: data,
});

export const EditBuilderFailure = (error) => ({
  type: Edit_Builder_LIST_FAILURE,
  payload: error,
});


export const DeleteBuilderRequest = () => ({
  type: Delete_Builder_LIST_REQUEST,
});

export const DeleteBuilderSuccess = (data) => ({
  type: Delete_Builder_LIST_SUCCESS,
  payload: data,
});

export const DeleteBuilderFailure = (error) => ({
  type: Delete_Builder_LIST_FAILURE,
  payload: error,
});


/****************** Prop Status ****************/

export const PropStatusIdRequest = () => ({
  type: PropStatus_IB_BY_REQUEST,
});

export const PropStatusIdSuccess = (data) => ({
  type: PropStatus_IB_BY_SUCCESS,
  payload: data,
});

export const PropStatusIdFailure = (error) => ({
  type: PropStatus_IB_BY_FAILURE,
  payload: error,
});

export const AddPropStatusRequest = () => ({
  type: ADD_PropStatus_LIST_REQUEST,
});

export const AddPropStatusSuccess = (data) => ({
  type: ADD_PropStatus_LIST_SUCCESS,
  payload: data,
});

export const AddPropStatusFailure = (error) => ({
  type: ADD_PropStatus_LIST_FAILURE,
  payload: error,
});


export const EditPropStatusRequest = () => ({
  type: Edit_PropStatus_LIST_REQUEST,
});

export const EditPropStatusSuccess = (data) => ({
  type: Edit_PropStatus_LIST_SUCCESS,
  payload: data,
});

export const EditPropStatusFailure = (error) => ({
  type: Edit_PropStatus_LIST_FAILURE,
  payload: error,
});


export const DeletePropStatusRequest = () => ({
  type: Delete_PropStatus_LIST_REQUEST,
});

export const DeletePropStatusSuccess = (data) => ({
  type: Delete_PropStatus_LIST_SUCCESS,
  payload: data,
});

export const DeletePropStatusFailure = (error) => ({
  type: Delete_PropStatus_LIST_FAILURE,
  payload: error,
});

/****************** Prop Type ****************/

export const PropTypeIdRequest = () => ({
  type: PropType_IB_BY_REQUEST,
});

export const PropTypeIdSuccess = (data) => ({
  type: PropType_IB_BY_SUCCESS,
  payload: data,
});

export const PropTypeIdFailure = (error) => ({
  type: PropType_IB_BY_FAILURE,
  payload: error,
});

export const AddPropTypeRequest = () => ({
  type: ADD_PropType_LIST_REQUEST,
});

export const AddPropTypeSuccess = (data) => ({
  type: ADD_PropType_LIST_SUCCESS,
  payload: data,
});

export const AddPropTypeFailure = (error) => ({
  type: ADD_PropType_LIST_FAILURE,
  payload: error,
});


export const EditPropTypeRequest = () => ({
  type: Edit_PropType_LIST_REQUEST,
});

export const EditPropTypeSuccess = (data) => ({
  type: Edit_PropType_LIST_SUCCESS,
  payload: data,
});

export const EditPropTypeFailure = (error) => ({
  type: Edit_PropType_LIST_FAILURE,
  payload: error,
});


export const DeletePropTypeRequest = () => ({
  type: Delete_PropType_LIST_REQUEST,
});

export const DeletePropTypeSuccess = (data) => ({
  type: Delete_PropType_LIST_SUCCESS,
  payload: data,
});

export const DeletePropTypeFailure = (error) => ({
  type: Delete_PropType_LIST_FAILURE,
  payload: error,
});


/****************** Microsite Meta Tag ****************/

export const MicrositeMetaTagIdRequest = () => ({
  type: MicrositeMetaTag_IB_BY_REQUEST,
});

export const MicrositeMetaTagIdSuccess = (data) => ({
  type: MicrositeMetaTag_IB_BY_SUCCESS,
  payload: data,
});

export const MicrositeMetaTagIdFailure = (error) => ({
  type: MicrositeMetaTag_IB_BY_FAILURE,
  payload: error,
});

export const AddMicrositeMetaTagRequest = () => ({
  type: ADD_MicrositeMetaTag_LIST_REQUEST,
});

export const AddMicrositeMetaTagSuccess = (data) => ({
  type: ADD_MicrositeMetaTag_LIST_SUCCESS,
  payload: data,
});

export const AddMicrositeMetaTagFailure = (error) => ({
  type: ADD_MicrositeMetaTag_LIST_FAILURE,
  payload: error,
});


export const EditMicrositeMetaTagRequest = () => ({
  type: Edit_MicrositeMetaTag_LIST_REQUEST,
});

export const EditMicrositeMetaTagSuccess = (data) => ({
  type: Edit_MicrositeMetaTag_LIST_SUCCESS,
  payload: data,
});

export const EditMicrositeMetaTagFailure = (error) => ({
  type: Edit_MicrositeMetaTag_LIST_FAILURE,
  payload: error,
});


export const DeleteMicrositeMetaTagRequest = () => ({
  type: Delete_MicrositeMetaTag_LIST_REQUEST,
});

export const DeleteMicrositeMetaTagSuccess = (data) => ({
  type: Delete_MicrositeMetaTag_LIST_SUCCESS,
  payload: data,
});

export const DeleteMicrositeMetaTagFailure = (error) => ({
  type: Delete_MicrositeMetaTag_LIST_FAILURE,
  payload: error,
});


/****************** Microsite Price ****************/

export const MicrositePriceIdRequest = () => ({
  type: MicrositePrice_IB_BY_REQUEST,
});

export const MicrositePriceIdSuccess = (data) => ({
  type: MicrositePrice_IB_BY_SUCCESS,
  payload: data,
});

export const MicrositePriceIdFailure = (error) => ({
  type: MicrositePrice_IB_BY_FAILURE,
  payload: error,
});

export const AddMicrositePriceRequest = () => ({
  type: ADD_MicrositePrice_LIST_REQUEST,
});

export const AddMicrositePriceSuccess = (data) => ({
  type: ADD_MicrositePrice_LIST_SUCCESS,
  payload: data,
});

export const AddMicrositePriceFailure = (error) => ({
  type: ADD_MicrositePrice_LIST_FAILURE,
  payload: error,
});


export const EditMicrositePriceRequest = () => ({
  type: Edit_MicrositePrice_LIST_REQUEST,
});

export const EditMicrositePriceSuccess = (data) => ({
  type: Edit_MicrositePrice_LIST_SUCCESS,
  payload: data,
});

export const EditMicrositePriceFailure = (error) => ({
  type: Edit_MicrositePrice_LIST_FAILURE,
  payload: error,
});


export const DeleteMicrositePriceRequest = () => ({
  type: Delete_MicrositePrice_LIST_REQUEST,
});

export const DeleteMicrositePriceSuccess = (data) => ({
  type: Delete_MicrositePrice_LIST_SUCCESS,
  payload: data,
});

export const DeleteMicrositePriceFailure = (error) => ({
  type: Delete_MicrositePrice_LIST_FAILURE,
  payload: error,
});