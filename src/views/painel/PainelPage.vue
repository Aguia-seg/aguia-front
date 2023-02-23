<template>
    <AppLayout>
                <!-- Content Header (Page header) -->
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0">Dashboard</h1>
                            </div><!-- /.col -->
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div><!-- /.col -->
                        </div><!-- /.row -->
                    </div><!-- /.container-fluid -->
                </div>
                <!-- /.content-header -->

                <!-- Main content -->
                <section class="content">
                    <div class="container-fluid">
                        <!-- Small boxes (Stat box) -->
                        <div class="row">
                            <div class="col-lg-4 col-6">
                                <!-- small box -->
                                <div class="small-box bg-white shadow">
                                    <div class="inner">
                                        <h3 class="clients-number">150</h3>
                                        <p>Clientes ativos</p>
                                        <h3 class="clients-number">150</h3>
                                        <p>Clientes ativos dos dia</p>

                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-bag"></i>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- ./col -->
                            <div class="col-lg-4 col-6">
                                <!-- small box -->
                                <div class="small-box d-flex shadow flex-column justify-content-center bg-white">
                                    <div class="inner">
                                        <h3 style="font-size: 72px; margin-left: 15px;"><sup style="font-size: 20px;">R$</sup>53</h3>

                                        <p style="margin-left: 50px;">Débito do mês</p>
                                    </div>
                                    <div class="icon">
                                        <i class="ion ion-stats-bars"></i>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- ./col -->
                            <div class="col-lg-4 col-6">
                                <!-- small box -->
                                <div class="small-box shadow bg-white">
                                    <div class="inner">
                                       <div class="card">
                                        <div class="card-header">
                                            <h5 class="card-title">Fluxo de caixa</h5>
                                        </div>
                                        <div class="card-body table-resposive p-0">
                                            <table class="table table-hover text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Entradas</th>
                                                        <th scope="col">Saídas</th>
                                                        <th scope="col">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>R$...</td>
                                                        <td>R$...</td>
                                                        <td>R$...</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                       </div>
                                        
                                    </div>
                                        
                                </div>
                            </div>
                        
                            
                        </div>
                        <!-- /.row -->
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <div class="small-box d-flex shadow flex-column justify-content-center bg-white">
                                    <div class="inner">
                                      <div class="card">
                                        <div class="cad-header d-flex justify-content-center">
                                            <h4 class="card-title"> Quadro de avisos</h4>
                                        </div>
                                        <div class="card-body">
                                            <ul>
                                                <li>Mensgem de aviso</li>
                                                <li>Mensgem de aviso</li>
                                                <li>Mensgem de aviso</li>
                                         
                                            </ul>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="small-box d-flex shadow flex-column justify-content-center bg-white">
                                   <div class="inner">
                                    <div class="card">
                                        <div class="cad-header d-flex justify-content-center" style="padding-top:20px;">
                                            <h4 class="card-title"> Atividades recentes</h4>
                                        </div>
                                        <div class="card-body">
                                            <ul>
                                                <li>Vendedor Fulano Fechou a... minutos</li>
                                                <li>Vendedor ciclano acessou a... minutos</li>
                                                <li>Vendedor fulano acessou a... minutos</li>
                                            </ul>
                                        </div>
                                    </div>
                                   </div>
    
                                </div>
                                
                            </div>
                        </div>
                        <!-- Main row -->

                    <!-- /.row (main row) -->
                </div><!-- /.container-fluid -->
            </section>
            <!-- /.content -->
    </AppLayout>
</template>

<style scoped src="./PainelPage.css"></style>
<script lang="ts" src="./PainelPage.ts"></script>

