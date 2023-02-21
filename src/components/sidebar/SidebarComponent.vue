<template>
 <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->  

      

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column " data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

          <li class="nav-item">
            <button class="nav-link btn-block" @click="() => $router.push('/')">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Painel
              </p>
            </button>
          </li>
          <li class="nav-item">
            <button href="#" class="nav-link btn-block ">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Cadastros
                <i class="right fas fa-angle-left"></i>
              </p>
            </button>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <button  class="nav-link w-100 text-dark btn-light">
                   <p>Active Page</p>
                </button>
              </li>
              
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>