<template>
    			<!-- Left sidebar START -->
    			<div class="col-xl-3">
    				<!-- Responsive offcanvas body START -->
    				<nav class="navbar navbar-light navbar-expand-xl mx-0">
    					<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    						<!-- Offcanvas header -->
    						<div class="offcanvas-header bg-light">
    							<h5 class="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
    							<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    						</div>
    						<!-- Offcanvas body -->
    						<div class="offcanvas-body p-3 p-xl-0">
    							<div class="bg-dark border rounded-3 pb-0 p-3 w-100">
    								<!-- Dashboard menu -->
    								<div class="list-group list-group-dark list-group-borderless">
										<router-link to="/profile" class="list-group-item">
											<i class="bi bi-ui-checks-grid fa-fw me-2"></i>Trang chính
										</router-link>
										<router-link to="/profile/courses" class="list-group-item">
											<i class="bi bi-basket fa-fw me-2"></i>Lớp học
										</router-link>
										<router-link to="/profile/quiz" class="list-group-item">
											<i class="bi bi-question-diamond fa-fw me-2"></i>Bài tập/Kiểm tra
										</router-link>
										<router-link to="/profile/earnings" class="list-group-item">
											<i class="bi bi-graph-up fa-fw me-2"></i>Thu nhập
										</router-link>
										<router-link to="/profile/students" class="list-group-item">
											<i class="bi bi-people fa-fw me-2"></i>Học sinh
										</router-link>
										<router-link to="/profile/orders" class="list-group-item">
											<i class="bi bi-folder-check fa-fw me-2"></i>Phụ huynh
										</router-link>
										<router-link to="/profile/reviews" class="list-group-item">
											<i class="bi bi-star fa-fw me-2"></i>Đánh giá
										</router-link>
										<router-link to="/profile/editprofile" class="list-group-item">
											<i class="bi bi-pencil-square fa-fw me-2"></i>Chỉnh sửa thông tin
										</router-link>
										<router-link to="/profile/payouts" class="list-group-item">
											<i class="bi bi-wallet2 fa-fw me-2"></i>Thanh toán
										</router-link>
										<router-link to="/profile/settings" class="list-group-item">
											<i class="bi bi-gear fa-fw me-2"></i>Cài đặt hồ sơ
										</router-link>
										<router-link to="/profile/delete" class="list-group-item">
											<i class="i bi-trash fa-fw me-2"></i>Xóa hồ sơ
										</router-link>
										<router-link to="/" class="list-group-item">
											<i class="fas fa-sign-out-alt fa-fw me-2"></i>Đăng xuất
										</router-link>
    								</div>
    							</div>
    						</div>
    					</div>
    				</nav>
    				<!-- Responsive offcanvas body END -->
    			</div>
    			<!-- Left sidebar END -->
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>