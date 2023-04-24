<script setup lang="ts"></script>

<template>
  <div class="col-12 col-lg-6 m-auto">
    <div class="row my-5">
      <div class="col-sm-10 col-xl-8 m-auto">
        <!-- Title -->
        <img src="../../assets/images/element/08.svg" class="h-40px mb-2" alt="">
        <h2>Reset password for your account!</h2>
        <p class="lead mb-4">Please reset password with your account.</p>

        <!-- Form START -->
        <form>
          <!-- Password -->
          <div class="mb-4">
            <label for="inputPassword5" class="form-label">New Password *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-lock" /></span>
              <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********"
                id="inputPassword5" required>
            </div>
          </div>
          <!-- Confirm Password -->
          <div class="mb-4">
            <label for="inputPassword6" class="form-label">Confirm New Password *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-lock" /></span>
              <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********"
                id="inputPassword6" required>
            </div>
          </div>
          <!-- Check box -->
          <!-- <div class="mb-4">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="checkbox-1">
                      <label class="form-check-label" for="checkbox-1">By signing up, you agree to the<a href="#"> terms
                          of service</a></label>
                    </div>
                  </div> -->
          <!-- Button -->
          <div class="align-items-center mt-0">
            <div class="d-grid">
              <button class="btn btn-primary mb-0" type="button">Reset Password</button>
            </div>
          </div>
        </form>
        <!-- Form END -->
      </div>
    </div>
  </div>
</template>
