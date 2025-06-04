// thunks.js

import axios from "axios";
import {
  fetchHeaderRequest,
  fetchHeaderSuccess,
  fetchHeaderFailure,
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchStoreFailure,
  fetchStoreRequest,
  fetchStoreSuccess,
  CreateStoreSuccess,
  CreateStoreRequest,
  CreateStoreFailure,
  LoginStoreRequest,
  LoginStoreSuccess,
  LoginStoreFailure,
  ProfileFailure,
  ProfileRequest,
  ProfileSuccess,
  OrderSuccess,
  OrderRequest,
  OrderFailure,
  ProductIdSuccess,
  ProductIdRequest,
  ProductIdFailure,
  AddCardIdRequest,
  AddCardIdSuccess,
  AddCardIdFailure,
  GetAddCardIdRequest,
  GetAddCardIdSuccess,
  GetAddCardIdFailure,
  DeleteAddCardIdRequest,
  DeleteAddCardIdSuccess,
  DeleteAddCardIdFailure,
  EditProductRequest,
  EditProductSuccess,
  EditProductFailure,
  AddProductRequest,
  AddProductSuccess,
  AddProductFailure,
  UserDataRequest,
  UserDataSuccess,
  UserDataFailure,
  BrandIdRequest,
  BrandIdSuccess,
  BrandIdFailure,
  RegistionStoreRequest,
  RegistionStoreSuccess,
  RegistionStoreFailure,
  AdminDataRequest,
  AdminDataSuccess,
  AdminDataFailure,
  DeleteProductRequest,
  DeleteProductSuccess,
  DeleteProductFailure,
  GetOurStaffRequest,
  GetOurStaffSuccess,
  GetOurStaffFailure,
  AddEmployeeRequest,
  AddEmployeeSuccess,
  AddEmployeeFailure,
  GetProfileRequest,
  GetProfileSuccess,
  GetProfileFailure,
  GetCouponsRequest,
  GetCouponsSuccess,
  GetCouponsFailure,
  GetEventsRequest,
  GetEventsSuccess,
  GetEventsFailure,
  GetBlogsRequest,
  GetBlogsSuccess,
  GetBlogsFailure,
  GetCouponRequest,
  GetCouponSuccess,
  GetCouponFailure,
  AddEventsRequest,
  AddEventsSuccess,
  AddEventsFailure,
  AddBlogsRequest,
  AddBlogsSuccess,
  AddBlogsFailure,
  SubBrandIdRequest,
  SubBrandIdSuccess,
  SubBrandIdFailure,
  AddTrackRequest,
  AddTrackSuccess,
  AddTrackFailure,


  MicrositeIdRequest,
  MicrositeIdSuccess,
  MicrositeIdFailure,
  AddMicrositeRequest,
  AddMicrositeSuccess,
  AddMicrositeFailure,
  EditMicrositeSuccess,
  EditMicrositeFailure,
  EditMicrositeRequest,
  DeleteMicrositeSuccess,
  DeleteMicrositeFailure,
  DeleteMicrositeRequest,

  MicrositeDetailIdRequest,
  MicrositeDetailIdSuccess,
  MicrositeDetailIdFailure,
  AddMicrositeDetailRequest,
  AddMicrositeDetailSuccess,
  AddMicrositeDetailFailure,
  EditMicrositeDetailSuccess,
  EditMicrositeDetailFailure,
  EditMicrositeDetailRequest,
  DeleteMicrositeDetailSuccess,
  DeleteMicrositeDetailFailure,
  DeleteMicrositeDetailRequest,


  FloorPlanIdRequest,
  FloorPlanIdSuccess,
  FloorPlanIdFailure,
  AddFloorPlanRequest,
  AddFloorPlanSuccess,
  AddFloorPlanFailure,
  EditFloorPlanSuccess,
  EditFloorPlanFailure,
  EditFloorPlanRequest,
  DeleteFloorPlanSuccess,
  DeleteFloorPlanFailure,
  DeleteFloorPlanRequest,

  AmenitiesIdRequest,
  AmenitiesIdSuccess,
  AmenitiesIdFailure,
  AddAmenitiesRequest,
  AddAmenitiesSuccess,
  AddAmenitiesFailure,
  EditAmenitiesSuccess,
  EditAmenitiesFailure,
  EditAmenitiesRequest,
  DeleteAmenitiesSuccess,
  DeleteAmenitiesFailure,
  DeleteAmenitiesRequest,


  SpecificationsIdRequest,
  SpecificationsIdSuccess,
  SpecificationsIdFailure,
  AddSpecificationsRequest,
  AddSpecificationsSuccess,
  AddSpecificationsFailure,
  EditSpecificationsSuccess,
  EditSpecificationsFailure,
  EditSpecificationsRequest,
  DeleteSpecificationsSuccess,
  DeleteSpecificationsFailure,
  DeleteSpecificationsRequest,


  SpecificationsDetailIdRequest,
  SpecificationsDetailIdSuccess,
  SpecificationsDetailIdFailure,
  AddSpecificationsDetailRequest,
  AddSpecificationsDetailSuccess,
  AddSpecificationsDetailFailure,
  EditSpecificationsDetailSuccess,
  EditSpecificationsDetailFailure,
  EditSpecificationsDetailRequest,
  DeleteSpecificationsDetailSuccess,
  DeleteSpecificationsDetailFailure,
  DeleteSpecificationsDetailRequest,


  BankApprovalIdRequest,
  BankApprovalIdSuccess,
  BankApprovalIdFailure,
  AddBankApprovalRequest,
  AddBankApprovalSuccess,
  AddBankApprovalFailure,
  EditBankApprovalSuccess,
  EditBankApprovalFailure,
  EditBankApprovalRequest,
  DeleteBankApprovalSuccess,
  DeleteBankApprovalFailure,
  DeleteBankApprovalRequest,

  LegalApprovalIdRequest,
  LegalApprovalIdSuccess,
  LegalApprovalIdFailure,
  AddLegalApprovalRequest,
  AddLegalApprovalSuccess,
  AddLegalApprovalFailure,
  EditLegalApprovalSuccess,
  EditLegalApprovalFailure,
  EditLegalApprovalRequest,
  DeleteLegalApprovalSuccess,
  DeleteLegalApprovalFailure,
  DeleteLegalApprovalRequest,

  BuilderIdRequest,
  BuilderIdSuccess,
  BuilderIdFailure,
  AddBuilderRequest,
  AddBuilderSuccess,
  AddBuilderFailure,
  EditBuilderSuccess,
  EditBuilderFailure,
  EditBuilderRequest,
  DeleteBuilderSuccess,
  DeleteBuilderFailure,
  DeleteBuilderRequest,

  PropStatusIdRequest,
  PropStatusIdSuccess,
  PropStatusIdFailure,
  AddPropStatusRequest,
  AddPropStatusSuccess,
  AddPropStatusFailure,
  EditPropStatusSuccess,
  EditPropStatusFailure,
  EditPropStatusRequest,
  DeletePropStatusSuccess,
  DeletePropStatusFailure,
  DeletePropStatusRequest,

  PropTypeIdRequest,
  PropTypeIdSuccess,
  PropTypeIdFailure,
  AddPropTypeRequest,
  AddPropTypeSuccess,
  AddPropTypeFailure,
  EditPropTypeSuccess,
  EditPropTypeFailure,
  EditPropTypeRequest,
  DeletePropTypeSuccess,
  DeletePropTypeFailure,
  DeletePropTypeRequest,

  MicrositeMetaTagIdRequest,
  MicrositeMetaTagIdSuccess,
  MicrositeMetaTagIdFailure,
  AddMicrositeMetaTagRequest,
  AddMicrositeMetaTagSuccess,
  AddMicrositeMetaTagFailure,
  EditMicrositeMetaTagSuccess,
  EditMicrositeMetaTagFailure,
  EditMicrositeMetaTagRequest,
  DeleteMicrositeMetaTagSuccess,
  DeleteMicrositeMetaTagFailure,
  DeleteMicrositeMetaTagRequest,

  MicrositePriceIdRequest,
  MicrositePriceIdSuccess,
  MicrositePriceIdFailure,
  AddMicrositePriceRequest,
  AddMicrositePriceSuccess,
  AddMicrositePriceFailure,
  EditMicrositePriceSuccess,
  EditMicrositePriceFailure,
  EditMicrositePriceRequest,
  DeleteMicrositePriceSuccess,
  DeleteMicrositePriceFailure,
  DeleteMicrositePriceRequest,

} from "./actions";
import constant from "../constant/constant";

const Dashboardlist = `${constant.baseUrl}api/order/Dashboardlist`;
const ProductList = `${constant.baseUrl}api/header/allbrandproduct?lang=1`;
const storeListcategories = `${constant.baseUrl}api/category/categories`;
const EditCategory = `${constant.baseUrl}api/category/categories`;
const DeleteCategory = `${constant.baseUrl}api/category/categories`;
const AddCategory = `${constant.baseUrl}api/category/addcategories`;
const AddBanners = `${constant.baseUrl}api/header/addbanner`;
const EditBanner = `${constant.baseUrl}api/header/banner`;
const DeleteBanner = `${constant.baseUrl}api/header/banner`;
const Userlogin = `${constant.baseUrl}api/auth/login`;
const Userprofile = `${constant.baseUrl}api/jobposts/alljobpost`;
const EditUserprofile = `${constant.baseUrl}api/jobposts/jobpost`;
const DeleteUserprofile = `${constant.baseUrl}api/jobposts/jobpost`;
const AllUserList = `${constant.baseUrl}api/user/list`;
const AddProduct = `${constant.baseUrl}api/jobposts/addjobpost`;
const Useraddress = `${constant.baseUrl}api/addcart/alladdcart`;
const UserBrandid = `${constant.baseUrl}api/brand/allbrand`;
const UserSubBrand = `${constant.baseUrl}api/company/getAllCompany`;
const AddBrandid = `${constant.baseUrl}api/brand/addbrand`;
const AddEmployessUser = `${constant.baseUrl}api/staff/createEmployee`;
const EditEmployessUser = `${constant.baseUrl}api/staff/updateEmployee`;
const DeleteEmployessUser = `${constant.baseUrl}api/staff/deleteEmployee`;
const EditBrandid = `${constant.baseUrl}api/brand/brand`;
const DeleteBrandid = `${constant.baseUrl}api/brand/brand`;
const CreateUser = `${constant.baseUrl}api/user/register`;
const EditUser = `${constant.baseUrl}api/user/User`;
const DeleteUser = `${constant.baseUrl}api/user/deleteUser`;
const AdminUserList = `${constant.baseUrl}api/user/adminUser`;
const AddCardProductid = `${constant.baseUrl}api/addcart/createCartItem`;
const GetAddCardProductcard = `${constant.baseUrl}api/addcart/addcartUser`;
const DelAddCardProductcard = `${constant.baseUrl}api/addcart/deleteCartItem`;
const GetStafflist = `${constant.baseUrl}api/staff/getAllEmployees`;
const Getprofilelist = `${constant.baseUrl}api/user/userGetById`;
const Getcouponslist = `${constant.baseUrl}api/coupon/GetCoupon`;
const GetEventslist = `${constant.baseUrl}api/event/allevents`;
const AddEventsId = `${constant.baseUrl}api/event/addevent`;
const GetBlogslist = `${constant.baseUrl}api/blogs`;


const GetMicrositelist = `${constant.baseUrl}api/microsites`;
const AddMicrositeId = `${constant.baseUrl}api/microsites`;
const EditMicrositeId = `${constant.baseUrl}api/microsites`;
const DeleteMicrositeId = `${constant.baseUrl}api/microsites`;


const GetMicrositeMetaTaglist = `${constant.baseUrl}api/microsite-meta-tag`;
const AddMicrositeMetaTagId = `${constant.baseUrl}api/microsite-meta-tag`;
const EditMicrositeMetaTagId = `${constant.baseUrl}api/microsite-meta-tag`;
const DeleteMicrositeMetaTagId = `${constant.baseUrl}api/microsite-meta-tag`;


const GetMicrositePricelist = `${constant.baseUrl}api/price`;
const AddMicrositePriceId = `${constant.baseUrl}api/price`;
const EditMicrositePriceId = `${constant.baseUrl}api/price`;
const DeleteMicrositePriceId = `${constant.baseUrl}api/price`;


const GetFloorPlanlist = `${constant.baseUrl}api/floor-plans`;
const AddFloorPlanId = `${constant.baseUrl}api/floor-plans`;
const EditFloorPlanId = `${constant.baseUrl}api/floor-plans`;
const DeleteFloorPlanId = `${constant.baseUrl}api/floor-plans`;


const GetAmenitieslist = `${constant.baseUrl}api/amenities`;
const AddAmenitiesId = `${constant.baseUrl}api/amenities`;
const EditAmenitiesId = `${constant.baseUrl}api/amenities`;
const DeleteAmenitiesId = `${constant.baseUrl}api/amenities`;


const GetSpecificationslist = `${constant.baseUrl}api/specifications`;
const AddSpecificationsId = `${constant.baseUrl}api/specifications`;
const EditSpecificationsId = `${constant.baseUrl}api/specifications`;
const DeleteSpecificationsId = `${constant.baseUrl}api/specifications`;


const GetSpecificationsDetaillist = `${constant.baseUrl}api/specificationsdetail`;
const AddSpecificationsDetailId = `${constant.baseUrl}api/specificationsdetail`;
const EditSpecificationsDetailId = `${constant.baseUrl}api/specificationsdetail`;
const DeleteSpecificationsDetailId = `${constant.baseUrl}api/specificationsdetail`;


const GetBankApprovallist = `${constant.baseUrl}api/bankapproval`;
const AddBankApprovalId = `${constant.baseUrl}api/bankapproval`;
const EditBankApprovalId = `${constant.baseUrl}api/bankapproval`;
const DeleteBankApprovalId = `${constant.baseUrl}api/bankapproval`;


const GetLegalApprovallist = `${constant.baseUrl}api/legalapproval`;
const AddLegalApprovalId = `${constant.baseUrl}api/legalapproval`;
const EditLegalApprovalId = `${constant.baseUrl}api/legalapproval`;
const DeleteLegalApprovalId = `${constant.baseUrl}api/legalapproval`;


const GetBuilderlist = `${constant.baseUrl}api/builders`;
const AddBuilderId = `${constant.baseUrl}api/builders`;
const EditBuilderId = `${constant.baseUrl}api/builders`;
const DeleteBuilderId = `${constant.baseUrl}api/builders`;

const GetPropStatuslist = `${constant.baseUrl}api/prop-status`;
const AddPropStatusId = `${constant.baseUrl}api/prop-status`;
const EditPropStatusId = `${constant.baseUrl}api/prop-status`;
const DeletePropStatusId = `${constant.baseUrl}api/prop-status`;

const GetPropTypelist = `${constant.baseUrl}api/prop-type`;
const AddPropTypeId = `${constant.baseUrl}api/prop-type`;
const EditPropTypeId = `${constant.baseUrl}api/prop-type`;
const DeletePropTypeId = `${constant.baseUrl}api/prop-type`;


const GetMicrositeDetaillist = `${constant.baseUrl}api/microsite_detail`;
const AddMicrositeDetailId = `${constant.baseUrl}api/microsite_detail`;
const EditMicrositeDetailId = `${constant.baseUrl}api/microsite_detail`;
const DeleteMicrositeDetailId = `${constant.baseUrl}api/microsite_detail`;



const AddCouponId = `${constant.baseUrl}api/coupon/createCoupon`;
const EditCouponId = `${constant.baseUrl}api/coupon/Coupons`;
const EditEventsId = `${constant.baseUrl}api/event/event`;
const AddBlogsId = `${constant.baseUrl}api/blogs`;
const EditBlogsId = `${constant.baseUrl}api/blog`;



const GetBannerlist = `${constant.baseUrl}api/header/allbanner?lang=1`;
const AddSubBrandlist = `${constant.baseUrl}api/company/createCompany`;
const EditSubBrandid = `${constant.baseUrl}api/company/updateCompany`;
const DeleteSubBrandid = `${constant.baseUrl}api/company/deleteCompany`;
const AddOrdersId = `${constant.baseUrl}api/order/trackStatusByIds`;








export const fetchDashboardlistData = () => async (dispatch) => {
  dispatch(fetchHeaderRequest());

  try {
    const response = await axios.get(Dashboardlist);
    dispatch(fetchHeaderSuccess(response.data));
  } catch (error) {
    dispatch(fetchHeaderFailure(error.message));
  }
};

export const fetchBannerlistData = () => async (dispatch) => {
  dispatch(fetchHeaderRequest());

  try {
    const response = await axios.get(GetBannerlist);
    dispatch(fetchHeaderSuccess(response.data));
  } catch (error) {
    dispatch(fetchHeaderFailure(error.message));
  }
};

export const fetchProductData = () => async (dispatch) => {
  dispatch(fetchProductRequest());

  try {
    const response = await axios.get(ProductList);
    dispatch(fetchProductSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductFailure(error.message));
  }
};
export const fetchStoreCategory = () => async (dispatch) => {
  dispatch(fetchStoreRequest());

  try {
    const response = await axios.get(storeListcategories);
    dispatch(fetchStoreSuccess(response.data));
  } catch (error) {
    dispatch(fetchStoreFailure(error.message));
  }
};

export const EditCategoryData = (id, body) => async (dispatch) => {
  dispatch(CreateStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditCategory}/${id}`, body);
    dispatch(CreateStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CreateStoreFailure(error.response.data.error));
  }
};

export const DeleteCategoryData = (id, body) => async (dispatch) => {
  dispatch(CreateStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteCategory}/${id}`);
    dispatch(CreateStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CreateStoreFailure(error.response.data.error));
  }
};
export const AddCategoryData = (id, body) => async (dispatch) => {
  dispatch(CreateStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddCategory}`, body);
    dispatch(CreateStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CreateStoreFailure(error.response.data.error));
  }
};

export const AddBannerData = (body) => async (dispatch) => {
  dispatch(CreateStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddBanners}`, body);
    dispatch(CreateStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CreateStoreFailure(error.response.data.error));
  }
};

export const DeleteBannerData = (id, body) => async (dispatch) => {
  dispatch(CreateStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteBanner}/${id}`);
    dispatch(CreateStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CreateStoreFailure(error.response.data.error));
  }
};


export const LoginUserData = (body) => async (dispatch) => {
  dispatch(LoginStoreRequest());
  try {
    const response = await axios.post(Userlogin, body);
    // Assuming response.data is like the sample above
    dispatch(LoginStoreSuccess(response.data));
  } catch (error) {
    dispatch(LoginStoreFailure(error.response.data.message));
  }
};

/*
export const LoginUserData = (body) => async (dispatch) => {
  dispatch(LoginStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(Userlogin, body);
    dispatch(LoginStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(LoginStoreFailure(error.response.data.message));
  }
};*/
export const CreateUserData = (body) => async (dispatch) => {
  dispatch(RegistionStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(CreateUser, body);
    dispatch(RegistionStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(RegistionStoreFailure(error.response.data.message));
  }
};

export const EditUserData = (id, body) => async (dispatch) => {
  dispatch(RegistionStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditUser}/${id}`, body);
    dispatch(RegistionStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(RegistionStoreFailure(error.response.data.message));
  }
};

export const DeleteUserData = (id, body) => async (dispatch) => {
  dispatch(RegistionStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteUser}/${id}`);
    dispatch(RegistionStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(RegistionStoreFailure(error.response.data.message));
  }
};
export const ProductListUserData = (body) => async (dispatch) => {
  dispatch(ProfileRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Userprofile}?lang=${body}`);
    dispatch(ProfileSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(ProfileFailure(error.response.data.message));
  }
};

export const EditProductUserData = (body, bodypass) => async (dispatch) => {
  dispatch(EditProductRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditUserprofile}/${body}`, bodypass);
    dispatch(EditProductSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditProductFailure(error.response.data.message));
  }
};

export const DeleteProductUserData = (body, bodypass) => async (dispatch) => {
  dispatch(DeleteProductRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteUserprofile}/${body}`);
    dispatch(DeleteProductSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteProductFailure(error.response.data.message));
  }
};

export const AddProductData = (body, bodypass) => async (dispatch) => {
  dispatch(AddProductRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddProduct}`, bodypass);
    dispatch(AddProductSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddProductFailure(error.response.data.message));
  }
};

export const UserListData = (body) => async (dispatch) => {
  dispatch(UserDataRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${AllUserList}`);
    dispatch(UserDataSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(UserDataFailure(error.response.data.message));
  }
};
export const AdminUserLists = (body) => async (dispatch) => {
  dispatch(AdminDataRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${AdminUserList}`);
    dispatch(AdminDataSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AdminDataFailure(error.response.data.message));
  }
};

export const OrderUserList = () => async (dispatch) => {
  dispatch(OrderRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Useraddress}`);
    dispatch(OrderSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(OrderFailure(error.response.data.message));
  }
};
export const GetBrandUserById = (body) => async (dispatch) => {
  dispatch(ProductIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${UserBrandid}`);
    dispatch(ProductIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(ProductIdFailure(error.response.data.message));
  }
};

export const GetSubBrandUserById = (body) => async (dispatch) => {
  dispatch(SubBrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${UserSubBrand}`);
    dispatch(SubBrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(SubBrandIdFailure(error.response.data.message));
  }
};

export const AddBrandUserById = (body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddBrandid}`, body);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};

export const AddSubBrandUserById = (body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddSubBrandlist}`, body);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const EditBrandUserById = (id, body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditBrandid}/${id}`, body);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};

export const EditBannerUserById = (id, body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditBanner}/${id}`, body);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const EditSubBrandUserById = (id, body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditSubBrandid}/${id}`, body);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const DeleteBrandUserById = (id, body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteBrandid}/${id}`);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const DeleteSubBrandUserById = (id, body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteSubBrandid}/${id}`);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const AddCardProductById = (body) => async (dispatch) => {
  dispatch(AddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(AddCardProductid, body);
    dispatch(AddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddCardIdFailure(error.response.data.message));
  }
};
export const GetAddCardProductById = (body) => async (dispatch) => {
  dispatch(GetAddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetAddCardProductcard}/${body}`);
    dispatch(GetAddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetAddCardIdFailure(error.response.data.message));
  }
};
export const DeleteAddCardProductById = (body) => async (dispatch) => {
  dispatch(DeleteAddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DelAddCardProductcard}/${body}`);
    dispatch(DeleteAddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteAddCardIdFailure(error.response.data.message));
  }
};
export const GetstaffListById = (body) => async (dispatch) => {
  dispatch(GetOurStaffRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetStafflist}`);
    dispatch(GetOurStaffSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetOurStaffFailure(error.response.data.message));
  }
};
export const GetprofileListById = (id) => async (dispatch) => {
  dispatch(GetProfileRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Getprofilelist}/${id}`);
    dispatch(GetProfileSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetProfileFailure(error.response.data.message));
  }
};

export const AddEmployeesById = (body) => async (dispatch) => {
  dispatch(AddEmployeeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddEmployessUser}`, body);
    dispatch(AddEmployeeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEmployeeFailure(error.response.data.message));
  }
};

export const EditEmployeesById = (id, body) => async (dispatch) => {
  dispatch(AddEmployeeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditEmployessUser}/${id}`, body);
    dispatch(AddEmployeeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEmployeeFailure(error.response.data.message));
  }
};

export const DeleteEmployeesById = (id, body) => async (dispatch) => {
  dispatch(AddEmployeeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteEmployessUser}/${id}`, body);
    dispatch(AddEmployeeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEmployeeFailure(error.response.data.message));
  }
};

export const GetCouponListById = (id) => async (dispatch) => {
  dispatch(GetCouponsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Getcouponslist}`);
    dispatch(GetCouponsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetCouponsFailure(error.response.data.message));
  }
};

export const GetEventListById = (id) => async (dispatch) => {
  dispatch(GetEventsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetEventslist}`);
    dispatch(GetEventsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetEventsFailure(error.response.data.message));
  }
};

export const GetBlogsListById = (id) => async (dispatch) => {
  dispatch(GetBlogsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetBlogslist}`);
    dispatch(GetBlogsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetBlogsFailure(error.response.data.message));
  }
};

export const AddCouponsUserById = (body) => async (dispatch) => {
  dispatch(GetCouponRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddCouponId}`, body);
    dispatch(GetCouponSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetCouponFailure(error.response.data.message));
  }
};

export const EditCouponsUserById = (id, body) => async (dispatch) => {
  dispatch(GetCouponRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditCouponId}/${id}`, body);
    dispatch(GetCouponSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetCouponFailure(error.response.data.message));
  }
};

export const DeleteCouponsUserById = (id) => async (dispatch) => {
  dispatch(GetCouponRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${EditCouponId}/${id}`);
    dispatch(GetCouponSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetCouponFailure(error.response.data.message));
  }
};

export const AddEventById = (body) => async (dispatch) => {
  dispatch(AddEventsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddEventsId}`, body);
    dispatch(AddEventsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEventsFailure(error.response.data.message));
  }
};
export const EditEventById = (id, body) => async (dispatch) => {
  dispatch(AddEventsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditEventsId}/${id}`, body);
    dispatch(AddEventsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEventsFailure(error.response.data.message));
  }
};

export const DeleteEventById = (id) => async (dispatch) => {
  dispatch(AddEventsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${EditEventsId}/${id}`);
    dispatch(AddEventsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEventsFailure(error.response.data.message));
  }
};

export const AddBlogsById = (body) => async (dispatch) => {
  dispatch(AddBlogsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddBlogsId}`, body);
    dispatch(AddBlogsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddBlogsFailure(error.response.data.message));
  }
};

export const EditBlogsById = (id, body) => async (dispatch) => {
  dispatch(AddBlogsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditBlogsId}/${id}`, body);
    dispatch(AddBlogsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddBlogsFailure(error.response.data.message));
  }
};

export const DeleteBlogsById = (id, body) => async (dispatch) => {
  dispatch(AddBlogsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${EditBlogsId}/${id}`);
    dispatch(AddBlogsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddBlogsFailure(error.response.data.message));
  }
};

export const AddtrackById = (body) => async (dispatch) => {
  dispatch(AddTrackRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${AddOrdersId}/${body}`);
    dispatch(AddTrackSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddTrackFailure(error.response.data.message));
  }
};


/*************   Microsite    ****************/


export const GetMicrositeById = (body) => async (dispatch) => {
  dispatch(MicrositeIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetMicrositelist}`);
    dispatch(MicrositeIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(MicrositeIdFailure(error.response.data.message));
  }
};

export const AddMicrositeById = (body) => async (dispatch) => {
  dispatch(AddMicrositeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddMicrositeId}`, body);
    dispatch(AddMicrositeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddMicrositeFailure(error.response.data.message));
  }
};

export const EditMicrositeById = (id, body) => async (dispatch) => {
  dispatch(EditMicrositeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditMicrositeId}/${id}`, body);
    dispatch(EditMicrositeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditMicrositeFailure(error.response.data.message));
  }
};

export const DeleteMicrositeById = (id, body) => async (dispatch) => {
  dispatch(DeleteMicrositeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteMicrositeId}/${id}`);
    dispatch(DeleteMicrositeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteMicrositeFailure(error.response.data.message));
  }
};



export const GetMicrositeDetailById = (body) => async (dispatch) => {
  dispatch(MicrositeDetailIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetMicrositeDetaillist}`);
    dispatch(MicrositeDetailIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(MicrositeDetailIdFailure(error.response.data.message));
  }
};

export const AddMicrositeDetailById = (body) => async (dispatch) => {
  dispatch(AddMicrositeMetaTagRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddMicrositeDetailId}`, body);
    dispatch(AddMicrositeDetailSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddMicrositeDetailFailure(error.response.data.message));
  }
};

export const EditMicrositeDetailById = (id, body) => async (dispatch) => {
  dispatch(EditMicrositeDetailRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditMicrositeDetailId}/${id}`, body);
    dispatch(EditMicrositeDetailSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditMicrositeDetailFailure(error.response.data.message));
  }
};

export const DeleteMicrositeDetailById = (id, body) => async (dispatch) => {
  dispatch(DeleteMicrositeDetailRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteMicrositeDetailId}/${id}`);
    dispatch(DeleteMicrositeDetailSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteMicrositeDetailFailure(error.response.data.message));
  }
};




/*************   Floor Plan    ****************/


export const GetFloorPlanById = (body) => async (dispatch) => {
  dispatch(FloorPlanIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetFloorPlanlist}`);
    dispatch(FloorPlanIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(FloorPlanIdFailure(error.response.data.message));
  }
};

export const AddFloorPlanById = (body) => async (dispatch) => {
  dispatch(AddFloorPlanRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddFloorPlanId}`, body);
    dispatch(AddFloorPlanSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddFloorPlanFailure(error.response.data.message));
  }
};

export const EditFloorPlanById = (id, body) => async (dispatch) => {
  dispatch(EditFloorPlanRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditFloorPlanId}/${id}`, body);
    dispatch(EditFloorPlanSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditFloorPlanFailure(error.response.data.message));
  }
};

export const DeleteFloorPlanById = (id, body) => async (dispatch) => {
  dispatch(DeleteFloorPlanRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteFloorPlanId}/${id}`);
    dispatch(DeleteFloorPlanSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteFloorPlanFailure(error.response.data.message));
  }
};



/*************   Amenities Plan    ****************/


export const GetAmenitiesById = (body) => async (dispatch) => {
  dispatch(AmenitiesIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetAmenitieslist}`);
    dispatch(AmenitiesIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AmenitiesIdFailure(error.response.data.message));
  }
};

export const AddAmenitiesById = (body) => async (dispatch) => {
  dispatch(AddAmenitiesRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddAmenitiesId}`, body);
    dispatch(AddAmenitiesSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddAmenitiesFailure(error.response.data.message));
  }
};

export const EditAmenitiesById = (id, body) => async (dispatch) => {
  dispatch(EditAmenitiesRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditAmenitiesId}/${id}`, body);
    dispatch(EditAmenitiesSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditAmenitiesFailure(error.response.data.message));
  }
};

export const DeleteAmenitiesById = (id, body) => async (dispatch) => {
  dispatch(DeleteAmenitiesRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteAmenitiesId}/${id}`);
    dispatch(DeleteAmenitiesSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteAmenitiesFailure(error.response.data.message));
  }
};



/*************  Specifications  ****************/


export const GetSpecificationsById = (body) => async (dispatch) => {
  dispatch(SpecificationsIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetSpecificationslist}`);
    dispatch(SpecificationsIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(SpecificationsIdFailure(error.response.data.message));
  }
};

export const AddSpecificationsById = (body) => async (dispatch) => {
  dispatch(AddSpecificationsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddSpecificationsId}`, body);
    dispatch(AddSpecificationsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddSpecificationsFailure(error.response.data.message));
  }
};

export const EditSpecificationsById = (id, body) => async (dispatch) => {
  dispatch(EditSpecificationsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditSpecificationsId}/${id}`, body);
    dispatch(EditSpecificationsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditSpecificationsFailure(error.response.data.message));
  }
};

export const DeleteSpecificationsById = (id, body) => async (dispatch) => {
  dispatch(DeleteSpecificationsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteSpecificationsId}/${id}`);
    dispatch(DeleteSpecificationsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteSpecificationsFailure(error.response.data.message));
  }
};



/*************  Specifications Detail ****************/


export const GetSpecificationsDetailById = (body) => async (dispatch) => {
  dispatch(SpecificationsDetailIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetSpecificationsDetaillist}`);
    dispatch(SpecificationsDetailIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(SpecificationsDetailIdFailure(error.response.data.message));
  }
};

export const AddSpecificationsDetailById = (body) => async (dispatch) => {
  dispatch(AddSpecificationsDetailRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddSpecificationsDetailId}`, body);
    dispatch(AddSpecificationsDetailSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddSpecificationsDetailFailure(error.response.data.message));
  }
};

export const EditSpecificationsDetailById = (id, body) => async (dispatch) => {
  dispatch(EditSpecificationsDetailRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditSpecificationsDetailId}/${id}`, body);
    dispatch(EditSpecificationsDetailSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditSpecificationsDetailFailure(error.response.data.message));
  }
};

export const DeleteSpecificationsDetailById = (id, body) => async (dispatch) => {
  dispatch(DeleteSpecificationsDetailRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteSpecificationsDetailId}/${id}`);
    dispatch(DeleteSpecificationsDetailSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteSpecificationsDetailFailure(error.response.data.message));
  }
};


/*************  Bank Approval  ****************/


export const GetBankApprovalById = (body) => async (dispatch) => {
  dispatch(BankApprovalIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetBankApprovallist}`);
    dispatch(BankApprovalIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BankApprovalIdFailure(error.response.data.message));
  }
};

export const AddBankApprovalById = (body) => async (dispatch) => {
  dispatch(AddBankApprovalRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddBankApprovalId}`, body);
    dispatch(AddBankApprovalSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddBankApprovalFailure(error.response.data.message));
  }
};

export const EditBankApprovalById = (id, body) => async (dispatch) => {
  dispatch(EditBankApprovalRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditBankApprovalId}/${id}`, body);
    dispatch(EditBankApprovalSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditBankApprovalFailure(error.response.data.message));
  }
};

export const DeleteBankApprovalById = (id, body) => async (dispatch) => {
  dispatch(DeleteBankApprovalRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteBankApprovalId}/${id}`);
    dispatch(DeleteBankApprovalSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteBankApprovalFailure(error.response.data.message));
  }
};


/*************  Legal Approval  ****************/


export const GetLegalApprovalById = (body) => async (dispatch) => {
  dispatch(LegalApprovalIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetLegalApprovallist}`);
    dispatch(LegalApprovalIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(LegalApprovalIdFailure(error.response.data.message));
  }
};

export const AddLegalApprovalById = (body) => async (dispatch) => {
  dispatch(AddLegalApprovalRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddLegalApprovalId}`, body);
    dispatch(AddLegalApprovalSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddLegalApprovalFailure(error.response.data.message));
  }
};

export const EditLegalApprovalById = (id, body) => async (dispatch) => {
  dispatch(EditLegalApprovalRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditLegalApprovalId}/${id}`, body);
    dispatch(EditLegalApprovalSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditLegalApprovalFailure(error.response.data.message));
  }
};

export const DeleteLegalApprovalById = (id, body) => async (dispatch) => {
  dispatch(DeleteLegalApprovalRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteLegalApprovalId}/${id}`);
    dispatch(DeleteLegalApprovalSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteLegalApprovalFailure(error.response.data.message));
  }
};


/*************  Builder  ****************/


export const GetBuilderById = (body) => async (dispatch) => {
  dispatch(BuilderIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetBuilderlist}`);
    dispatch(BuilderIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BuilderIdFailure(error.response.data.message));
  }
};

export const AddBuilderById = (body) => async (dispatch) => {
  dispatch(AddBuilderRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddBuilderId}`, body);
    dispatch(AddBuilderSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddBuilderFailure(error.response.data.message));
  }
};

export const EditBuilderById = (id, body) => async (dispatch) => {
  dispatch(EditBuilderRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditBuilderId}/${id}`, body);
    dispatch(EditBuilderSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditBuilderFailure(error.response.data.message));
  }
};

export const DeleteBuilderById = (id, body) => async (dispatch) => {
  dispatch(DeleteBuilderRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteBuilderId}/${id}`);
    dispatch(DeleteBuilderSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteBuilderFailure(error.response.data.message));
  }
};



/*************  Property Status  ****************/


export const GetPropStatusById = (body) => async (dispatch) => {
  dispatch(PropStatusIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetPropStatuslist}`);
    dispatch(PropStatusIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(PropStatusIdFailure(error.response.data.message));
  }
};

export const AddPropStatusById = (body) => async (dispatch) => {
  dispatch(AddPropStatusRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddPropStatusId}`, body);
    dispatch(AddPropStatusSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddPropStatusFailure(error.response.data.message));
  }
};

export const EditPropStatusById = (id, body) => async (dispatch) => {
  dispatch(EditPropStatusRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditPropStatusId}/${id}`, body);
    dispatch(EditPropStatusSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditPropStatusFailure(error.response.data.message));
  }
};

export const DeletePropStatusById = (id, body) => async (dispatch) => {
  dispatch(DeletePropStatusRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeletePropStatusId}/${id}`);
    dispatch(DeletePropStatusSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeletePropStatusFailure(error.response.data.message));
  }
};


/*************  Property Type  ****************/


export const GetPropTypeById = (body) => async (dispatch) => {
  dispatch(PropTypeIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetPropTypelist}`);
    dispatch(PropTypeIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(PropTypeIdFailure(error.response.data.message));
  }
};

export const AddPropTypeById = (body) => async (dispatch) => {
  dispatch(AddPropTypeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddPropTypeId}`, body);
    dispatch(AddPropTypeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddPropTypeFailure(error.response.data.message));
  }
};

export const EditPropTypeById = (id, body) => async (dispatch) => {
  dispatch(EditPropTypeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditPropTypeId}/${id}`, body);
    dispatch(EditPropTypeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditPropTypeFailure(error.response.data.message));
  }
};

export const DeletePropTypeById = (id, body) => async (dispatch) => {
  dispatch(DeletePropTypeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeletePropTypeId}/${id}`);
    dispatch(DeletePropTypeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeletePropTypeFailure(error.response.data.message));
  }
};


/*************  Microsite Meta Tag  ****************/


export const GetMicrositeMetaTagById = (body) => async (dispatch) => {
  dispatch(MicrositeMetaTagIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetMicrositeMetaTaglist}`);
    dispatch(MicrositeMetaTagIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(MicrositeMetaTagIdFailure(error.response.data.message));
  }
};

export const AddMicrositeMetaTagById = (body) => async (dispatch) => {
  dispatch(AddMicrositeDetailRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddMicrositeMetaTagId}`, body);
    dispatch(AddMicrositeMetaTagSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddMicrositeMetaTagFailure(error.response.data.message));
  }
};

export const EditMicrositeMetaTagById = (id, body) => async (dispatch) => {
  dispatch(EditMicrositeMetaTagRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditMicrositeMetaTagId}/${id}`, body);
    dispatch(EditMicrositeMetaTagSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditMicrositeMetaTagFailure(error.response.data.message));
  }
};

export const DeleteMicrositeMetaTagById = (id, body) => async (dispatch) => {
  dispatch(DeleteMicrositeMetaTagRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteMicrositeMetaTagId}/${id}`);
    dispatch(DeleteMicrositeMetaTagSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteMicrositeMetaTagFailure(error.response.data.message));
  }
};


/*************  Microsite Price  ****************/


export const GetMicrositePriceById = (body) => async (dispatch) => {
  dispatch(MicrositePriceIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetMicrositePricelist}`);
    dispatch(MicrositePriceIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(MicrositePriceIdFailure(error.response.data.message));
  }
};

export const AddMicrositePriceById = (body) => async (dispatch) => {
  dispatch(AddMicrositePriceRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddMicrositePriceId}`, body);
    dispatch(AddMicrositePriceSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddMicrositePriceFailure(error.response.data.message));
  }
};

export const EditMicrositePriceById = (id, body) => async (dispatch) => {
  dispatch(EditMicrositePriceRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditMicrositePriceId}/${id}`, body);
    dispatch(EditMicrositePriceSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditMicrositePriceFailure(error.response.data.message));
  }
};

export const DeleteMicrositePriceById = (id, body) => async (dispatch) => {
  dispatch(DeleteMicrositePriceRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteMicrositePriceId}/${id}`);
    dispatch(DeleteMicrositePriceSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteMicrositePriceFailure(error.response.data.message));
  }
};