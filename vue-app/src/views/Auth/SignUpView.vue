<script setup lang="ts">
function signUpFaceBook() {
  console.log('sign up facebook');
}

function signUpGoogle() {
  console.log('sign up google');
}
</script>

<template>
  <div class="col-12 col-lg-6 m-auto">
    <div class="row my-5">
      <div class="col-sm-10 col-xl-8 m-auto">
        <!-- Title -->
        <img src="../../assets/images/element/03.svg" class="h-40px mb-2" alt="">
        <h2>Sign up for your account!</h2>
        <p class="lead mb-4">Nice to see you! Please Sign up with your account.</p>

        <!-- Form START -->
        <form>
          <!-- Email -->
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Email address *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-envelope" /></span>
              <input type="email" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail"
                id="exampleInputEmail1" required>
            </div>
          </div>
          <!-- Password -->
          <div class="mb-4">
            <label for="inputPassword5" class="form-label">Password *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-lock" /></span>
              <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********"
                id="inputPassword5" required>
            </div>
          </div>
          <!-- Confirm Password -->
          <div class="mb-4">
            <label for="inputPassword6" class="form-label">Confirm Password *</label>
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
              <button class="btn btn-primary mb-0" type="button">Sign Up</button>
            </div>
          </div>
        </form>
        <!-- Form END -->

        <!-- Social buttons -->
        <div class="row">
          <!-- Divider with text -->
          <div class="position-relative my-4">
            <hr>
            <p class="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
          </div>
          <!-- Social btn -->
          <div class="col-xxl-6 d-grid">
            <button @click="signUpGoogle" class="btn bg-google mb-2 mb-xxl-0"><font-awesome-icon class="me-2"
                icon="fa-brands fa-google" />Signup with Google</button>
          </div>
          <!-- Social btn -->
          <div class="col-xxl-6 d-grid">
            <button @click="signUpFaceBook" class="btn bg-facebook mb-0"><font-awesome-icon class="me-2"
                icon="fa-brands fa-facebook-f" />Signup with
              Facebook</button>
          </div>
        </div>

        <!-- Sign up link -->
        <div class="mt-4 text-center">
          <span>Already have an account?
            <RouterLink to="/auth/login">
              Sign in here
            </RouterLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
