<script setup lang="ts">

</script>

<template>
	<div class="col-xl-3">
		<!-- Responsive offcanvas body START -->
		<nav class="navbar navbar-light navbar-expand-xl mx-0">
			<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
				<!-- Offcanvas header -->
				<div class="offcanvas-header bg-light">
					<h5 class="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
					<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
						aria-label="Close"></button>
				</div>
				<!-- Offcanvas body -->
				<div class="offcanvas-body p-3 p-xl-0">
					<div class="bg-dark border rounded-3 pb-0 p-3 w-100">
						<!-- Dashboard menu -->
						<div class="list-group list-group-dark list-group-borderless">
							<router-link to="/profile" class="list-group-item">
								<i class="bi bi-ui-checks-grid fa-fw me-2"></i>Trang chính
							</router-link>
							<router-link to="/profile/student/subscriptions" class="list-group-item">
								<i class="bi bi-card-checklist fa-fw me-2"></i>Tài khoản
							</router-link>
							<router-link to="/profile/student/courseView" class="list-group-item">
								<i class="bi bi-basket fa-fw me-2"></i>Lớp đã đăng ký
							</router-link >
							<router-link to="/profile/student/courseResume" class="list-group-item">
								<i class="far fa-fw fa-file-alt me-2"></i>Lớp đang học
							</router-link>
							<router-link to="/profile/student/quiz" class="list-group-item">
								<i class="bi bi-question-diamond fa-fw me-2"></i>Bài tập/Kiểm tra
							</router-link>
							<router-link to="/profile/student/payment" class="list-group-item">
								<i class="bi bi-credit-card-2-front fa-fw me-2"></i>Thông tin học phí
							</router-link>
							<router-link to="/profile/student/bookmark" class="list-group-item">
								<i class="bi bi-cart-check fa-fw me-2"></i>Yêu thích
							</router-link>
							<router-link to="/profile/student/editProfile" class="list-group-item">
									<i class="bi bi-pencil-square fa-fw me-2"></i>Chỉnh sửa thông tin
							</router-link>
							<router-link to="/profile/student/profileSettings" class="list-group-item">
									<i class="bi bi-gear fa-fw me-2"></i>Cài đặt hồ sơ
							</router-link>
							<router-link to="/profile/student/deleteProfile" class="list-group-item">
									<i class="bi bi-trash fa-fw me-2"></i>Xóa hồ sơ
							</router-link>
							<router-link to="/" class="list-group-item text-danger bg-danger-soft-hover">
									<i class="bi-box-arrow-right fa-fw me-2"></i>Đăng xuất
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<!-- Responsive offcanvas body END -->
	</div>
</template>

