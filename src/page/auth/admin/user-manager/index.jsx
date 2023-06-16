import React, { useEffect, useState } from "react";
import AdminSideBar from "../../../../components/admin-sidebar";
import ModelAddUser from "./ModelAddUser";
import ModelUpdateUser from "./ModelUpdateUser";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser } from "../../../../redux/auth.slice";
import { toast } from "react-toastify";
import { RoleEnums } from "../../../../enums/role.enums";

function UserManager() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const users = useSelector((state) => state.auth.allUsers);
  const isLoading = useSelector((state) => state.auth.getUserLoading);

  console.log(users);
  const selectedUser = selectedId ? users.find((p) => p.id === selectedId) : {};
  const dispatch = useDispatch();

  const getAllUserHandler = async () => {
    try {
      const res = await dispatch(getAllUser()).unwrap();
    } catch (error) {
      toast.error(error);
    }
  };

  const deleteUserHandler = async (id) => {
    try {
      const result = window.confirm("Bạn muốn xóa user này");
      if (result) {
        await dispatch(deleteUser({ id })).unwrap();
        toast.success("Xóa user thành công");
        await getAllUserHandler();
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };

  useEffect(() => {
    getAllUserHandler();
  }, []);
  return (
    <div>
      <div className="tables">
        <ModelAddUser
          title="Thêm người dùng"
          isOpen={isOpenAdd}
          onClose={() => setIsOpenAdd(false)}
        />
        <ModelUpdateUser
          title="Cập nhật người dùng"
          isOpen={isOpenUpdate}
          onClose={() => setIsOpenUpdate(false)}
          user={selectedUser}
        />

        <h2 className="title1 mb-4">Danh sách người dùng</h2>
        <div
          className="bs-example widget-shadow"
          data-example-id="hoverable-table"
        >
          <button
            className="btn btn-primary mb-2"
            onClick={() => setIsOpenAdd(true)}
          >
            Thêm mới
          </button>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Admin</th>
                  <th>User</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading && !users.length && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 24,
                    }}
                  >
                    <div>
                      <div className="loader"></div>
                    </div>
                  </div>
                )}

                {users.length > 0 &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.roles.map((item) => item.name).join(",")}</td>
                      <td>{user.email}</td>
                      <td>
                        <input
                          type="checkbox"
                          id="admin"
                          name="admin"
                          checked={user.roles
                            .map((item) => item.name)
                            .join(",")
                            .includes(RoleEnums.Admin)}
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="user"
                          name="user"
                          checked={user.roles
                            .map((item) => item.name)
                            .join(",")
                            .includes(RoleEnums.Customer)}
                        />
                      </td>
                      <td className="project-actions text-left d-flex ">
                        <button
                          className="btn btn-info btn-sm me-2"
                          onClick={() => {
                            setIsOpenUpdate(true);
                            setSelectedId(user.id);
                          }}
                        >
                          <i className="fa-solid fa-pen-to-square" />
                          Sửa
                        </button>
                        <button
                          className="btn btn-danger btn-sm d-block"
                          onClick={() => deleteUserHandler(user.id)}
                        >
                          <i className="fa-solid fa-trash-can" />
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManager;
